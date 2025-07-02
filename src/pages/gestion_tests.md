# Test configuration and managment

## Overview

This part describes how to configurate and use tests in **Cortest**, including the use of server and local JSON files, the configuration process through the app.  
More information about how tests are used can be found in the next part.

## JSON files

### Server JSON structure

The **server JSON** file acts as a master repository for all available tests. It is stored on the backend and fetched during test configuration.

#### Categories :

Tests are classified into five functional categories based on what they should test on the patient :

- `Examen-type` – or "Standard exam" containing default tests
- `Mémoire` - or "Memory"
- `Langage` - or "Language"
- `Vision`
- `Sensitivo-moteur` - or "Sensory-Motor"

Each category contains an id (`id_category`), a name (`nom`) and multiple tests.

> [!INFO]
> Each test can be classified in multiple categories !

#### Test object structure :

Each test includes up to 11 elements :

- Mandatory (non-nullable) fields :

  | **Field** |  **Type**  | **Description**                                                                         |
  | :-------- | :--------: | :-------------------------------------------------------------------------------------- |
  | `id_test` | Int/Double | Unique identifier for each test                                                         |
  | `nom`     |   String   | Display name for tests in the app                                                       |
  | `type`    |   String   | It can be `"auto"`, `"hetero"` or `"both"` based on which testing mode the test handles |

- Optional fields that may be necessary depending on the test :
  |**Field** | **Type** | **Description** |
  | :---------------------- | :--: | :-- |
  | `audio` | String | Audio file name for instructions (.m4a) |
  | `a_consigne` | String | Instruction for auto mode |
  | `h_consigne` | String | Instruction for hetero mode |
  | `image` | List\<String>| Image file names used in the test (.png) |
  | `mot_set` | List\<String> | Additionnal text (words, sentences) to display and use for a test |
  | `mot_set_audio` | List\<String> | Audio file names for `mot_set` (.m4a) |
  | `affichage` | String | Defines the display mode for texts and images : `"hasard"` (random) or `"complet"` (show all) |
  | `groupe` | Object | Group metadata to use to configure tests that should work together. It contains a name `nom` and identifier `id_groupe` that is unique to each group of tests. |
  > File names are needed to find the corresponding audio or image in the project files to play (or display) them during a test.

### Local JSON structure

**Local JSON** files are created during test configurations and are stored in external (`/storage/emulated/0/Android/data/com.example.epilepsytestapp/files/EpilepsyTests/Configurations/configuration_yyyy-MM-dd_HH:mm.json`) and internal storages (`/data/user/0/com.example.epilepsytestapp/files/localtestconfiguration.json`) of the app.  
They represent the selected tests for a given patient that should be used during a testing phase.

To write a local JSON, tests are copied from the server JSON to retain **their original structure** as they still keep each of their objects this way. In fact, local JSON files contain an ordered list of the selected tests, and each unique test only appears once in a file.

Here is an example of what could be found inside a local JSON file after a configuration :

```json title="localtestconfiguration.json"
[
{"a_consigne":"Quel est ton mot-code ?","audio":"mot_code","h_consigne":"Quel est ton mot-code ?","id_test":1,"nom":"Mot-code","type":"both"},
{"a_consigne":"Que ressens-tu ?","audio":"ressenti","h_consigne":"Qu\u0027est ce que tu ressens ?","id_test":2,"nom":"Ressenti","type":"both"},
...
{"a_consigne":"Répète le mot ","audio":"langage_repet_mot_seta","groupe":{"id_groupe":4,"nom":"Langage (animaux)"},"h_consigne":"Répète après moi le mot ","id_test":24,"mot_set":["Lapin","Renard","Chat","Cheval"],"mot_set_audio":["lapin","renard","chat","cheval"],"nom":"Répetition d\u0027un mot (animaux)","type":"both"},
...
]
```

## Code structure

Code linked to test configuration is located in the directory `app/src/main/java/com/example/epilepsytestapp/`, and here are the important files:

### Key Files

| File                           | Function                                                                                |
| :----------------------------- | :-------------------------------------------------------------------------------------- |
| `MainActivity.kt`              | Root activity, handles navigation between screens including those for the configuration |
| `category/Test.kt`             | Defines the `Test` class and inner `Groupe` class                                       |
| `category/NetworkCategory.kt`  | Handles Retrofit + Gson for the server JSON                                             |
| `category/LocalJsonManager.kt` | Load/save local JSON configurations                                                     |
| `category/TestDisplay.kt`      | Defines how to display each test                                                        |

### Screens

| File                        | Function                                                                                                                                         |
| :-------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `ui/TypeConfigScreen.kt`    | Page 1 of the configuration flow - choosing between `Auto` and `Hetero` modes                                                                    |
| `ui/ConfigScreen.kt`        | Page 2 of the configuration flow - fetching tests from the server JSON with a preselection of tests from the previous configuration (local JSON) |
| `ui/RecapConfigScreen.kt`   | Page 3 of the configuration flow - configuration summary, reordering of the tests and saving the configuration into a new local JSON file        |
| `ui/ConfigHistoryScreen.kt` | Date stamped history of previous configurations                                                                                                  |

## Test Configuration

This section presents how users can configure tests from the app interface.

In practice, this is a setting that regular users should not change, as it must be configurated by or with the help of a **neurologist** .

Tests' configuration must be done after **signing up**, and can be accessed via the Settings page by clicking on the button `"Modifier la configuration"`. This will display an alert dialog warning users that modifying the configuration requires supervision by a qualified medical professional.

### Configuration flow (3 pages + configuration history) :

#### **1. Test Type Selection – `TypeConfigScreen.kt`**

The user can select one of the two following modes :

- **"Autotest"** → sets the current camera to **front camera**
- **"Hétérotest"** → sets the current camera to **rear camera**

```kotlin title="TypeConfigScreen.kt"
OutlinedButton(
    onClick = {
        cameraViewModel.isFrontCamera.value = false
        navController.navigate("testConfigScreen")
    },
    ...
) {
    Text("Hétérotest", ...)
}

...

OutlinedButton(
    onClick = {
        cameraViewModel.isFrontCamera.value = true
        navController.navigate("testConfigScreen")
    },
    ...
) {
    Text("Autotest", ...)
}
```

Clicking on one of the two buttons sets the used camera to the corresponding one, filters test visibility for the next page, and navigates to it.

> [!NOTE]
> The user can be directed to this page from either the Signup, or from the Settings : a back arrow will only be displayed on the top left of the screen if the previous page was not a part of the signup.

#### **2. Test Configuration – `ConfigScreen.kt`**

This screen represents one of the few pages of the application needing an **internet connection** due to the use of a server JSON.

This screen is where the user selects the **tests** based on the previously chosen type : `auto` or `hetero`. The test selection logic is based on the following **key steps** :

i. **Loading JSON files (both server and local)** :

```kotlin title="ConfigScreen.kt"
val loadedCategories = loadCategoriesFromNetwork()
val localTestConfiguration = if (!filename.isNullOrBlank()) {
    val file = File("EpilepsyTests/Configurations", filename).toString()
    LocalCatManager.loadLocalTests(context, file)
} else {
    LocalCatManager.loadLocalTests(context)
}
```

ii. **Preselecting tests** :

```kotlin title="ConfigScreen.kt"
val preSelectedTests = loadedCategories.values.flatten()
    .filter { test ->
        (test.type == effectiveType || test.type == "both") &&
        localTestConfiguration.any { it.id_test == test.id_test }
    }
```

iii. **Type dependent filtering for the tests fetched from the server JSON** :

```kotlin title="ConfigScreen.kt"
val filteredTests = testList.filter {
    it.type == effectiveType || it.type == "both"
}
```

> Only tests **relevant to the current camera** (front or rear) are displayed based on values `auto`, `hetero`, or `both`.

iv. **Test selection and displaying tests by category** :

```kotlin title="ConfigScreen.kt"
// Calling the CategoryItem composable function for each category and their tests
CategoryItem(
    categoryName,
    filteredTests,
    selectedTests.value
) { test, checked ->
    ...
}

...

// Definition of the funciton to display categories with each tests and checkboxes to select tests
@Composable
fun CategoryItem(
    title: String,
    tests: List<Test>,
    selectedTests: Set<Test>,
    onTestCheckedChange: (Test, Boolean) -> Unit
) {
    var isExpanded by remember { mutableStateOf(false) }

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(bottom = 8.dp)
    ) {

        Button(
            onClick = { isExpanded = !isExpanded },
            shape = RoundedCornerShape(8.dp),
            colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.surfaceVariant),
            modifier = Modifier
                .fillMaxWidth()
                .height(48.dp)
        ) {
            Text(
                text = title,
                color = MaterialTheme.colorScheme.primary,
                style = MaterialTheme.typography.bodyLarge,
                modifier = Modifier.weight(1f)
            )
            Icon(
                painter = painterResource(id = R.mipmap.ic_expend_more_foreground),
                contentDescription = "Expand",
                modifier = Modifier
                    .size(20.dp)
                    .rotate(if (isExpanded) 90f else 0f)
            )
        }

        Column(modifier = Modifier.padding(start = 16.dp)) {
            tests.forEach { test ->
                val isChecked = selectedTests.any { it.id_test == test.id_test }

                if (isExpanded || isChecked) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Checkbox(
                            checked = isChecked,
                            onCheckedChange = { checked ->
                                onTestCheckedChange(test, checked)
                            }
                        )
                        Text(
                            text = test.nom,
                            style = MaterialTheme.typography.bodyLarge,
                            color = MaterialTheme.colorScheme.primary
                        )
                    }
                }
            }
        }
    }
}
```

> Tests are grouped by categories. The user can expand each category to **view and select tests** via their checkboxes, and all selected tests are displayed even when their categories are minimized.
> When checked, a test is added to a **list of selected tests** if the id does not match with an already selected test.

v. **Checkbox selection with a group logic** :

```kotlin title="ConfigScreen.kt"
test.groupe?.let { groupe ->
    if (groupe.id_groupe != -1) {
        allTests.value
            .filter {
                it.groupe?.id_groupe == groupe.id_groupe &&
                (it.type == effectiveType || it.type == "both")
            }
            .forEach { groupTest ->
                updatedSet.add(groupTest)
            }
    }
}
```

> If a selected test belongs to a **group** (cf. JSON structure), all tests in that group are **automatically selected** as well.

vi. **Navigation** :

```kotlin title="ConfigScreen.kt"
CustomButton(text = "Historique des configurations") {
    navController.navigate("configHistoryScreen")
}
...
CustomButton(text = "Suivant") {
    navController.currentBackStackEntry?.savedStateHandle?.set(
        "selectedTests",
        selectedTests.value.toList()
    )
    navController.navigate("recapScreen")
}
```

> "**Historique des configurations**" navigates to the history screen where are listed all the previously saved and date stamped confugrations.
>
> "**Suivant**" stores all selected tests in a list and navigates to the summary (Recap) screen with it.
>
> "**Annuler**" cancels the configuration and goes back to the previous page.

#### **3. Recap and save – `RecapConfigScreen.kt`**

This screen allows the user to:

- **Review selected tests** and **reorder** them via up and down buttons :

```kotlin title="RecapConfigScreen.kt"
@Composable
fun ReorderableList(tests: MutableList<Test>) {
    val versionMap = remember { mutableStateMapOf<Test, Int>() }

    tests.forEachIndexed { index, test ->
        val version = versionMap[test] ?: 0
        key(test.hashCode() to version) {
            TestItem(test, index, tests, versionMap) { updatedList ->
                tests.clear()
                tests.addAll(updatedList)
            }
        }
    }
}

...

// Moving a test up :
IconButton(onClick = {
    if (index > 0) {
        val newList = tests.toMutableList().apply {
            swap(index, index - 1)
        }
        versionMap[test] = (versionMap[test] ?: 0) + 1
        versionMap[tests[index - 1]] = (versionMap[tests[index - 1]] ?: 0) + 1
        onListUpdate(newList)
    }
}) {
    Icon(..., modifier = Modifier.rotate(-90f)) // Flèche vers le haut
}

// Moving a test down :
IconButton(onClick = {
    if (index < tests.size - 1) {
        val newList = tests.toMutableList().apply {
            swap(index, index + 1)
        }
        versionMap[test] = ...
        onListUpdate(newList)
    }
}) {
    Icon(..., modifier = Modifier.rotate(90f)) // Flèche vers le bas
}

...

// Swapping function:
fun <T> MutableList<T>.swap(index1: Int, index2: Int) {
    val temp = this[index1]
    this[index1] = this[index2]
    this[index2] = temp
}
```

- Save a final configuration (creates new local JSONs) :

```kotlin title="RecapConfigScreen.kt"
// Getting selected tests back after the navigation :
val selectedTests = remember {
    mutableStateListOf<Test>().apply {
        navController.previousBackStackEntry?.savedStateHandle
            ?.get<List<Test>>("selectedTests")?.let { addAll(it) }
    }
}

...

// Button to navigate back to the configuration screen if the user wants to change it :
CustomButton(text = "Retour") {
    val backStackEntry = navController.previousBackStackEntry
    if (backStackEntry != null) {
        backStackEntry.savedStateHandle["selectedTests"] = selectedTests.toList()
        navController.popBackStack()
    }
}

...

// Button to save a final configuration :
CustomButton(text = "Enregistrer la configuration") {
    coroutineScope.launch {
        LocalCatManager.saveLocalTests(context, "localtestconfiguration.json", selectedTests.toList())

        val formatter = SimpleDateFormat("yyyy-MM-dd_HH:mm", Locale.getDefault())
        val fileName = "configuration_$formattedDate.json"
        LocalCatManager.saveLocalTests(context, fileName, selectedTests.toList(), true)
    }
    Toast.makeText(context, "Configuration enregistrée !", Toast.LENGTH_LONG).show()
    navController.navigate("home") {
        popUpTo("home") { inclusive = true }
    }
}
```

> [!NOTE]
> Navigating back to ConfigScreen.kt preserves selectedTests between pages.

#### **4. Configuration History – `ConfigHistoryScreen.kt`**

This screen lists all the previous configurations (local JSON files) that have been saved in the form of clickable boxes. It can be accessed from the Configuration screen ConfigScreen.kt.  
When the user clicks on a configuration from the list, the application navigates back to the Configuration screen while keeping the name of the clicked file, and then preselects tests based on what was saved and used for that configuration.

```kotlin title="ConfigHistoryScreen.kt"
LazyColumn {
                    items(configurations) { (displayName, fileName) ->
                        Card(
                            modifier = Modifier
                                .align(Alignment.CenterHorizontally)
                                .fillMaxWidth()
                                .padding(vertical = 4.dp)
                                .clickable {
                                    // On envoie le nom du fichier et on revient à ConfigScreen
                                    navController.previousBackStackEntry
                                        ?.savedStateHandle
                                        ?.set("configFileToLoad", fileName)
                                    navController.popBackStack()
                                },
                            shape = RoundedCornerShape(12.dp),
                            elevation = CardDefaults.cardElevation(2.dp),
                            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant)
                        ) {
                            Text(
                                text = displayName,
                                textAlign = TextAlign.Center,
                                style = MaterialTheme.typography.bodyLarge,
                                modifier = Modifier
                                    .padding(24.dp)
                            )
                        }
                    }
                }
```

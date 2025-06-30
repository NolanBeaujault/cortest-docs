---
sidebar_position: 1
title: Overview
---

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Application Overview

Explore the main screens of the application: **Home**, **Demo**, **Files**, and **Settings**.

---

## Home Page

<div style={{
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',
  marginBottom: '1rem',
  background: 'linear-gradient(45deg, #F8F8F8 20%, #E0E0E0 60%, #29d5b0 100%)',
  padding: '2rem',
  borderRadius: '2rem',
  border: '1px solid #ddd'
}}>

  <div className="description-box" style={{ flex: '1 1 400px', minWidth: '300px' }}>
    <h2 style={{ marginTop: 0, color: '#2B4765' }}>Home Page</h2>
    <Link to="/wait"
        className="doc-button"
    >&lt; HomePage &gt;</Link>
    <p>
      The application's home page displays the <strong>‘Start a test’</strong> button, which lets you start testing as soon as a crisis occurs. The date of the last test is also displayed.
    </p>
    <p>
      This button is also available via a <strong>widget</strong> for even faster access: the test can be launched immediately, to capture the first few seconds of the crisis, which are often the most valuable for analysis.
    </p>

  </div>

  <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
    <img src={useBaseUrl('/img/home.svg')} alt="Home screen" style={{ maxWidth: '50%', borderRadius: '1rem' }} />
  </div>
</div>

---

## Demo Page

<div style={{
  display: 'flex',
  flexWrap: 'wrap-reverse',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',
  marginBottom: '1rem',
  background: 'linear-gradient(135deg, #29d5b0 0%, #E0E0E0 40%, #F8F8F8 100%)',
  padding: '2rem',
  borderRadius: '2rem',
  border: '1px solid #ddd'
}}>

  <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
    <img src={useBaseUrl('/img/demo.svg')} alt="Home screen" style={{ maxWidth: '50%', borderRadius: '1rem' }} />
  </div>
  <div className="description-box" style={{ flex: '1 1 400px', minWidth: '300px' }}>
    <h2 style={{ marginTop: 0, color: '#2B4765' }}>Demo Page</h2>
    <Link to="/docs/intro"
        className="doc-button"
    >&lt; DemoPage &gt;</Link>
    <p>
      The Demo page guides users through the use of the 'Start a test' functionality. It allows users to familiarize themselves with the application beforehand, in a calm environment.
    </p>
    <p>
      It explains step by step how a crisis test runs, how to move from one test to another, how to end the test and how to validate the saving of the files.
    </p>
    <p>
      The aim is to make the application simple and intuitive to use, even in a stressful situation.
    </p>
  </div>

</div>

---

## Files Page

<div style={{
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',
  marginBottom: '1rem',
  background: 'linear-gradient(135deg, #F8F8F8 20%, #E0E0E0 60%, #29d5b0 100%)',
  padding: '2rem',
  borderRadius: '2rem',
  border: '1px solid #ddd'
}}>

  <div className="description-box" style={{ flex: '1 1 400px', minWidth: '300px' }}>
    <h2 style={{ marginTop: 0, color: '#2B4765' }}>File Page</h2>
    <Link to="/docs/intro"
        className="doc-button"
    >&lt; FilePage &gt;</Link>
    <p>
      This Files page is divided into three sections:
      <ul>
        <li>Questionnaire : contains the post-crisis questionnaires completed after each testing session.</li>
        <li>Instructions : displays the testing instructions defined for each crisis, together with their timestamps.</li>
        <li>Videos : contains all the videos recorded during the tests.</li>
      </ul>
    </p>
    <p>
      Each file linked to a crisis is named with the corresponding date and time, making it easy to find the right file.
    </p>
    <p>
      All documents (PDFs, videos, etc.) are stored locally on the device, ensuring that they are always accessible, even without an internet connection, and can be consulted at the click of a button.
    </p>
  </div>

  <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
    <img src={useBaseUrl('/img/fichiers.svg')} alt="Home screen" style={{ maxWidth: '55%', borderRadius: '1rem' }} />
  </div>
</div>

---

## Settings Page

<div style={{
  display: 'flex',
  flexWrap: 'wrap-reverse',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',
  marginBottom: '1rem',
  background: 'linear-gradient(45deg, #29d5b0 0%, #E0E0E0 40%, #F8F8F8 100%)',
  padding: '2rem',
  borderRadius: '2rem',
  border: '1px solid #ddd'
}}>

  <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
    <img src={useBaseUrl('/img/demo.svg')} alt="Home screen" style={{ maxWidth: '60%', borderRadius: '1rem' }} />
  </div>
  <div className="description-box" style={{ flex: '1 1 400px', minWidth: '300px' }}>
    <h2 style={{ marginTop: 0, color: '#2B4765' }}>Settings Page</h2>
    <Link to="/docs/intro"
        className="doc-button"
    >&lt; SettingsPage &gt;</Link>
    <p>
      The Settings page has four main sections:
      <ul>
        <li>Manage authorizations : activate or deactivate the permissions required by the application, such as camera, microphone, local storage, etc.</li>
        <li>Log out of the application.</li>
        <li>Modify test configurations : to be defined with the neurologist, this section allows you to customize the tests carried out during a seizure, according to the patient's needs.</li>
        <li>Modify the post-crisis questionnaire : also set by the neurologist, this allows you to adapt the questions asked after the seizure, to capture the patient's feelings and observations.</li>
      </ul>
    </p>
    <p>
      Finally, this is where you can choose the default camera (front or rear), depending on whether you want to opt for a self-test or a hetero-test. 
    </p>
  </div>
</div>

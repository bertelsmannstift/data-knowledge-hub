import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';

function CommunityAdmonition(props) {
  return (
    <div style={{
      border: 'solid #73F19C', 
      background: 'linear-gradient(262.38deg, #CCF7DB 8.76%, #E6FBED 96.47%)',
      padding: 25,
      marginBottom: 15,
      borderRadius: '10px'}}>

      <div style={{ display: 'flex', alignItems: 'center', minHeight: 22, marginBottom: 12 }}>
        <img src="/img/icons/eye.svg" alt="Eye Icon" style={{ marginRight: 10, height: '100%' }} />
        <h5 style={{ fontSize: 20, margin: 0 }}>{props.title}</h5>
      </div>
      
      <div>{props.children}</div>
    </div>
  );
}

function ContactAdmonition(props) {
  return (
    <div style={{
      border: 'solid #73F19C', 
      background: 'linear-gradient(262.38deg, #CCF7DB 8.76%, #E6FBED 96.47%)',
      padding: 25,
      marginBottom: 15,
      borderRadius: '10px'}}>

      <div style={{ display: 'flex', alignItems: 'center', minHeight: 22, marginBottom: 12 }}>
        <img src="/img/icons/speech.svg" alt="Speech Bubble Icon" style={{ marginRight: 10, height: '100%' }} />
        <h5 style={{ fontSize: 20, margin: 0 }}>{props.title}</h5>
      </div>
      
      <div>{props.children}</div>
    </div>
  );
}

function HubNoteAdmonition(props) {
  return (
    <div style={{
      border: 'solid #1EB4FF', 
      background: 'linear-gradient(262.38deg, #90E5FC 8.76%, #E3F8FE 96.47%)',
      padding: 25,
      marginBottom: 15,
      borderRadius: '10px'}}>

      <div style={{ display: 'flex', alignItems: 'center', minHeight: 22, marginBottom: 12 }}>
        <img src="/img/icons/note.svg" alt="Note Icon" style={{ marginRight: 10, height: '100%' }} />
        <h5 style={{ fontSize: 20, margin: 0 }}>{props.title}</h5>
      </div>
      
      <div>{props.children}</div>
    </div>
  );
}

function AboutAdmonition(props) {
  return (
    <div style={{
      border: 'solid #1EB4FF', 
      background: 'linear-gradient(262.38deg, #90E5FC 8.76%, #E3F8FE 96.47%)',
      padding: 25,
      marginBottom: 15,
      borderRadius: '10px'}}>

      <div style={{ display: 'flex', alignItems: 'center', minHeight: 22, marginBottom: 12 }}>
        <img src="/img/icons/eye.svg" alt="Eye Icon" style={{ marginRight: 10, height: '100%' }} />
        <h5 style={{ fontSize: 20, margin: 0 }}>{props.title}</h5>
      </div>
      
      <div>{props.children}</div>
    </div>
  );
}

function ContributeAdmonition(props) {
  return (
    <div style={{
      border: 'solid #1EB4FF', 
      background: '#FFFFFF',
      padding: 25,
      marginBottom: 15,
      borderRadius: '10px'}}>

      <div style={{ display: 'flex', alignItems: 'center', minHeight: 22, marginBottom: 12 }}>
        <img src="/img/icons/accounts.svg" alt="Accounts Icon" style={{ marginRight: 10, height: '100%' }} />
        <h5 style={{ fontSize: 20, margin: 0 }}>{props.title}</h5>
      </div>
      
      <div>{props.children}</div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  'community': CommunityAdmonition,
  'contact': ContactAdmonition,
  'hub-note': HubNoteAdmonition,
  'about': AboutAdmonition,
  'contribute': ContributeAdmonition,
};

export default AdmonitionTypes;
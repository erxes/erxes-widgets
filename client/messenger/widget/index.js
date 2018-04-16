/* global ROOT_URL */

/*
 * Messenger message's embeddable script
 */

// css
import './index.css';

// check is mobile
const isMobile =
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/Android/i);

let viewportContent = '';
let generatedContent = '';

if (isMobile) {
  const viewportMeta = document.querySelector('meta[name="viewport"]');
  if (!viewportMeta) {
    // add meta
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content =
      'initial-scale=1, user-scalable=0, maximum-scale=1, width=device-width';
    document.getElementsByTagName('head')[0].appendChild(meta);

    viewportContent = meta.content;
  } else {
    viewportContent = viewportMeta.content;
    disableZoom();
  }
}

function disableZoom() {
  const viewportMeta = document.querySelector('meta[name="viewport"]');
  if (viewportMeta && generatedContent) {
    viewportMeta.content = generatedContent;
  } else {
    const meta = `initial-scale=1, user-scalable=0, maximum-scale=1, ${viewportContent}`;
    viewportMeta.content = uniqueString(meta);
    generatedContent = viewportMeta.content;
  }
}

function revertViewPort() {
  const viewportMeta = document.querySelector('meta[name="viewport"]');
  if (viewportMeta) {
    viewportMeta.content = viewportContent;
  }
}

function uniqueString(str) {
  str = str.replace(/[ ]/g, '').split(',');
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) == -1) result.push(str[i]);
  }

  return result.join(', ');
}

const iframeId = 'erxes-messenger-iframe';
const container = 'erxes-messenger-container';

// container
const erxesContainer = document.createElement('div');
erxesContainer.id = container;
erxesContainer.className = 'erxes-messenger-hidden';

// add iframe
let iframe = document.createElement('iframe');
iframe.id = iframeId;
iframe.src = `${ROOT_URL}/messenger`;
iframe.style.display = 'none';

erxesContainer.appendChild(iframe);
document.body.appendChild(erxesContainer);

// send erxes setting to iframe
iframe = document.querySelector(`#${iframeId}`);

// after iframe load send connection info
iframe.onload = async () => {
  iframe.style.display = 'block';

  iframe.contentWindow.postMessage(
    {
      fromPublisher: true,
      setting: {
        ...window.erxesSettings.messenger
      },
    },
    '*'
  );
};

// listen for widget toggle
window.addEventListener('message', event => {
  const data = event.data;
  const { isVisible } = data;

  if (data.fromErxes && data.fromMessenger) {
    if (isMobile && isVisible) {
      disableZoom();
    } else {
      revertViewPort();
    }

    iframe = document.querySelector(`#${iframeId}`);

    if (data.purpose === 'messenger') {
      erxesContainer.className = `erxes-messenger-${
        isVisible ? 'shown' : 'hidden'
      }`;
      document.body.classList.toggle('messenger-widget-shown', isVisible);
    }

    if (data.purpose === 'notifier') {
      erxesContainer.className += ` erxes-notifier-${
        isVisible ? 'shown' : 'hidden'
      }`;
    }

    if (data.purpose === 'notifierFull') {
      erxesContainer.className += ` erxes-notifier-${
        isVisible ? 'shown' : 'hidden'
      } fullMessage`;
    }
  }
});

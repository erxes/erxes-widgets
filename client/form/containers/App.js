import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { App as DumbApp } from '../components';
import { postMessage, init, closePopup, showPopup } from '../actions';
import { connection } from '../connection';
import { getBrowserInfo } from '../../utils';

class App extends React.Component {
  componentDidMount() {
    this.setBrowserInfo();
    window.addEventListener('message', (event) => {
      if (event.data.fromPublisher) {
        // receive show popup command from publisher
        if (event.data.action === 'showPopup') {
          this.props.showPopup();
        }
      }
    });
  }

  async setBrowserInfo() {
    connection.browserInfo = await getBrowserInfo();
  }

  setHeight() {
    const elementsHeight = document.getElementById('erxes-container').clientHeight;
    postMessage({
      action: 'changeContainerStyle',
      style: `height: ${elementsHeight}px;`,
    });
  }

  componentDidUpdate() {
    this.setHeight();
  }

  render() {
    const { isPopupVisible, isFormVisible, isCalloutVisible, formData } = this.props;
    const { loadType } = formData;

    const extendedProps = { ...this.props, setHeight: this.setHeight };

    let parentClass;
    let containerClass;

    if (loadType === 'popup') {
      if (isPopupVisible) {
        parentClass = 'erxes-modal-iframe';
        containerClass = 'modal-form open';
      } else {
        parentClass = 'erxes-modal-iframe hidden';
        containerClass = 'modal-form';
      }
    }

    if (loadType === 'slideInLeft') {
      parentClass = 'erxes-slide-left-iframe';
      containerClass = 'container-slide-in-left';
    }

    if (loadType === 'slideInRight') {
      parentClass = 'erxes-slide-right-iframe';
      containerClass = 'container-slide-in-right';
    }

    if (loadType === 'dropdown') {
      parentClass = 'erxes-dropdown-iframe';
      containerClass = 'container-dropdown';

      if (isCalloutVisible) {
        containerClass += ' call-out';
      }
    }

    if (loadType === 'embedded') {
      parentClass = 'erxes-embedded-iframe';
      containerClass = 'container-embedded';
    }

    if (loadType === 'shoutbox') {
      if (isCalloutVisible || isFormVisible) {
        parentClass = 'erxes-shoutbox-iframe';
      } else {
        parentClass = 'erxes-shoutbox-iframe erxes-hidden';
      }

      containerClass = 'container-shoutbox';
    }

    postMessage({
      action: 'changeContainerClass',
      className: parentClass,
    });

    extendedProps.containerClass = containerClass;

    return <DumbApp {...extendedProps} />;
  }
}

const mapStateToProps = state => ({
  isPopupVisible: state.isPopupVisible,
  isFormVisible: state.isFormVisible,
  isCalloutVisible: state.isCalloutVisible,
  currentStatus: state.currentStatus,
  formData: connection.data.formData,
});

const mapDisptachToProps = dispatch => ({
  init() {
    dispatch(init());
  },

  closePopup() {
    dispatch(closePopup());
  },

  showPopup() {
    dispatch(showPopup());
  },
});

App.propTypes = {
  formData: PropTypes.object,
  isPopupVisible: PropTypes.bool,
  isFormVisible: PropTypes.bool,
  isCalloutVisible: PropTypes.bool,
  showPopup: PropTypes.func,
}

export default connect(mapStateToProps, mapDisptachToProps)(App);

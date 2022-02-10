import React from 'react';
import { useState } from "react";
import 'antd/dist/antd.min.css';

import { Modal, Button } from 'antd';

/*MODAL COMPONETS*/

  class ModalButton extends React.Component {
  state = {
    modal2Visible: false,
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  render(weather) {
    return (
      
      <>
        <Button type="primary" onClick={() => this.setModal2Visible(true)}>
          More
        </Button>
        <Modal
          title="Vertically centered modal dialog"
          centered
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
            /* Containes weather data to display when clicked*/
          <p >
                    The weather condition in {weather?.name},{" "}
                    {weather?.sys?.country} is described as :{" "}
                    {weather?.weather[0].description} with a temperature of{" "}
                    {Math.ceil(Number(weather?.main.temp))} °C and a humidity of{" "}
                    {weather?.main?.humidity} %
                  </p>
          
         
        </Modal>
      </>
    );
  }
}

export default ModalButton;

import React, { Component } from "react";
import { geneticsInfo } from "../../data";
import WaveAnimation from "../../components/animations/WaveAnimation";
import BackArrow from "../../components/tools/images/BackArrow";

export default class GeneticsContainer extends Component {
  render() {
    const info = geneticsInfo;
    return (
      <div className="container">
        <WaveAnimation color="white" />
        <div className="Genetics-container">
          <BackArrow color={info.titleColor} />
          <div className="flex Content-info-holder space-10">
            <div className="Content-info flex-column flex-1">
              <div>
                <h1>{info.title.toUpperCase()}</h1>
                {info.caption.map((p, key) => <p key={key}>{p}</p>)}
              </div>
            </div>
          </div>
          <div className="Content-info-holder flex">
            <div className="Content-image-title flex-column flex-1">
              {info.images.map(
                (image, key) =>
                  key % 2 === 0 ? (
                    <div className="collapse-row-column" key={key}>
                      <img src={image} className="image" />
                      <h3>IMAGE TITLE dada</h3>
                    </div>
                  ) : (
                    <div className="collapse-row-column" key={key}>
                      <h3>IMAGE TITLE dada</h3>
                      <img src={image} className="image" />
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

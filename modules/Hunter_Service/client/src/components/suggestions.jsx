import React from "react";
import ReactDOM from "react-dom";
import IndividualSuggestion from "./IndividualSuggestion";
import styles from "./Suggestions.css";

class Suggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  onNextClick() {
    if (this.state.activeIndex < 6) {
      this.setState({ activeIndex: this.state.activeIndex + 1 });
    } else {
      this.setState({ activeIndex: 0 });
    }
  }

  onPrevClick() {
    if (this.state.activeIndex > 1) {
      this.setState({ activeIndex: this.state.activeIndex - 1 });
    } else {
      this.setState({ activeIndex: 0 });
    }
  }

  render() {
    return (
      <div>
        <h3>
          <b>YOU MAY ALSO LIKE</b>
        </h3>

        <div className={styles.slideshow}>
                <div className={styles.buttoncontainer}>
          <button className={styles.prev} onClick={this.onPrevClick.bind(this)}>
            &lt;
          </button>
          <button className={styles.next} onClick={this.onNextClick.bind(this)}>
            &gt;
          </button>
        </div>
          <div
            className={styles.slideshowwrapper}
            style={{
              transform: `translateX(${this.state.activeIndex * -100}%)`,
              transition: "0.2s"
            }}
          >
            {this.props.suggests.map(data => (
              <IndividualSuggestion data={data} />
            ))}
            
          </div>
        </div>
      </div>
    );
  }
}

export default Suggestions;

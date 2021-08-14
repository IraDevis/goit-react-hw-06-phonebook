// import { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Filter.module.css";

export default function Filter({ value, onChange }) {
  return (
    <>
      <label className={styles.label}>
        Find by name
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

// class Filter extends Component {
// static propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string,
// };

//   render() {
// return (
//   <>
//     <label className={styles.label}>
//       Find by name
//       <input
//         className={styles.input}
//         type="text"
//         value={this.props.value}
//         onChange={this.props.onChange}
//       ></input>
//     </label>
//   </>
// );
//   }
// }

// export default Filter;

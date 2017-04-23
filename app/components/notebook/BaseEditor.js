import PropTypes from 'prop-types';
import React from 'react';
import styles from './BaseEditor.css';

import { Editor, EditorState, convertToRaw } from 'draft-js';
import LeftGutter from './LeftGutter';
import RightGutter from './RightGutter';

export default class BaseEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = { editorState: props.editorState };

    this.onChange = (editorState) => {
      this.setState({ editorState });

      // // Redux action
      // this.props.updateEditor({
      //   content: convertToRaw(editorState.getCurrentContent())
      // });
    };
  }

  render() {
    return (
      <div className={styles.container} >
        <LeftGutter />
        <div className={styles.editor}>
          <Editor
            placeholder="Enter text..."
            editorState={this.state.editorState}
            // editorState={EditorState.acceptSelection(this.props.editorState, this.state.editorState.getSelection())}
            onChange={this.onChange}
            spellCheck
          />
        </div>
        <RightGutter />
      </div>
    );
  }
}

BaseEditor.propTypes = {
  editorState: PropTypes.object
};

BaseEditor.defaultProps = {
  editorState: EditorState.createEmpty()
};

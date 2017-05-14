import PropTypes from 'prop-types';
import React from 'react';
import styles from './BaseEditor.css';

import { Editor, EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import LeftGutter from './LeftGutter';
import RightGutter from './RightGutter';

export default class BaseEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = { editorState: this.editorStateFromProps() };

    this.onChange = (editorState) => {
      this.setState({ editorState });

      this.props.updateEditor({
        content: convertToRaw(editorState.getCurrentContent())
      });
    };
  }

  focus = () => {
    this.refs.editor.focus()
  };

  editorStateFromProps() {
    if (this.props.notebook.content)
      return EditorState.createWithContent(convertFromRaw(this.props.notebook.content));
    else
      return EditorState.createEmpty();
  }

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <LeftGutter />
        <div className={styles.editor}  onClick={this.focus}>
          <Editor
            placeholder="Enter text..."
            // editorState={this.editorStateFromProps()}
            editorState={EditorState.acceptSelection(this.editorStateFromProps(), this.state.editorState.getSelection())}
            onChange={this.onChange}
            ref='editor'
            spellCheck={true}
          />
        </div>
        <RightGutter />
      </div>
    );
  }
}

BaseEditor.propTypes = {
  notebook: PropTypes.object
};

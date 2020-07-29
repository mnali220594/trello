import React from "react";

import BoardPreview from "../BoardPreview";

class Home extends React.Component {
  render() {
    return (
      <div>
        {this.props.boards.map((board, key) => (
          <BoardPreview key={key} board={board} />
        ))}

        {/* {this.props.boards.map((key) => (
          <BoardPreview key={key} board={this.props.boards[key]} />
        ))} */}
      </div>
    );
  }
}

export default Home;

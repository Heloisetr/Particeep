import React, { Component } from 'react';

import 'styles/pagination.css';

interface Props {
  pagination: number;
  getDataPagination: Function;
}

interface State {
  actualPage: number;
}

class Pagination extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      actualPage: 1,
    }
  }

  setActualPage = (pageNumber: number) => {
    const { getDataPagination } = this.props;

    this.setState({ actualPage: pageNumber });

    getDataPagination(pageNumber);
  }

  render() {
    const { actualPage } = this.state;
    const { pagination } = this.props;

    return (
      <div className="Pagination">
        {actualPage > 1 &&
          <>
            <div className="PageSelection" onClick={() => this.setActualPage(1)}>
              <p className="Selector">{"<<"}</p>
            </div>
            <div className="PageSelection" onClick={() => this.setActualPage(actualPage - 1)}>
              <p className="Selector">{actualPage - 1}</p>
            </div>
          </>
        }
        <div className="PageSelection PageSelected">
          <p className="Selector">{actualPage}</p>
        </div>
        {pagination > actualPage &&
          <>
            <div className="PageSelection" onClick={() => this.setActualPage(actualPage + 1)}>
              <p className="Selector">{actualPage + 1}</p>
            </div>
            <div className="PageSelection" onClick={() => this.setActualPage(pagination)}>
              <p className="Selector">{">>"}</p>
            </div>
          </>
        }
      </div>
    );
  }
}

export default Pagination;

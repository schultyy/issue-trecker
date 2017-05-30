import React from 'react';
import ReactMarkdown from 'react-markdown';

export default class IssueList extends React.Component {

  constructor() {
    super();

    this.state = {
      expandedIssue: null
    };
  }

  onIssueClick(clickedIssue) {
    this.setState({
      expandedIssue: clickedIssue
    });
  }

  render() {
    const { issues } = this.props;
    const { expandedIssue } = this.state;

    const issueClassNames = (issue) => {
      if (expandedIssue && (expandedIssue._id === issue._id)) {
        return 'issue-caption selected';
      }
      return 'issue-caption';
    };

    return (
      <div className="repository-issues">
        {issues.length > 0 ?
          <ul className="issues">
            {issues.map(i => (
              <li key={i._id} className="issue">
                <button
                  className={issueClassNames(i)}
                  onClick={this.onIssueClick.bind(this, i)}
                >
                  {`${i.number} - ${i.title}`}
                </button>
                { expandedIssue && (i._id === expandedIssue._id) ?
                    <ReactMarkdown className="issue-body" source={i.body} />
                  : null }
              </li>
            ))}
          </ul>
        : null }
      </div>
    );
  }
}
import { h, Component } from 'preact';
import { RefinementList } from 'react-instantsearch/dom';
import Media from 'react-media';

import './Refinement.scss';

interface Props {
  attribute: string;
}
export default class Refinement extends Component<Props, void> {
  render() {
    const { attribute } = this.props;
    return (
      <article className="ml1 w-100 w-30-m w-20-l pr2">
        <h1 className="f5">{attribute}</h1>
        <Media query="(min-width: 40rem)">
          {matches => (
            <RefinementList attributeName={attribute} withSearchBox={matches} />
          )}
        </Media>
      </article>
    );
  }
}

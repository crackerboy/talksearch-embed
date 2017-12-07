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
      <article className="fl w-100-40r w-30-m w-20-l">
        <h1 className="hide-40 f5">{attribute}</h1>
        <Media query="(min-width: 40rem)">
          {matches => (
            <RefinementList attributeName={attribute} withSearchBox={matches} />
          )}
        </Media>
      </article>
    );
  }
}
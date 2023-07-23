import React from 'react';
import {SuggestionProps} from './types';

const SuggestionsList = (
  { response, onSuggestionClickCb, EmptyComponent }: SuggestionProps,
): JSX.Element => {
  const suggestions = response.suggestions;

  const onStockClick = (stock:string) => {
    onSuggestionClickCb?.(stock);
  };

  return (
    <>
    {suggestions.length ? (
      <ul>
        {suggestions.map((symbol) => (
          <li key={symbol.name} onClick={() => onStockClick(symbol.name)}>
            {symbol.name}
          </li>
        ))}
      </ul>
    ) : (
        React.isValidElement(EmptyComponent) ? <EmptyComponent /> : <div>Stock Not Found</div>
    )}
  </>
  )
};

export default SuggestionsList;
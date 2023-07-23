import React from 'react';
import {AutocompleteState} from '../../../../api/types/getStock';

export type SuggestionProps = {
    response: AutocompleteState,
    onSuggestionClickCb: (item:string) => void,
    EmptyComponent?: string | JSX.Element | React.ReactNode | React.PropsWithChildren | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>,
}
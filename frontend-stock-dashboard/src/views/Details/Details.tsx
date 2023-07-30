import Header from "../Header";
import { StockTable } from "./components";
import { FilterContainer } from "./styled";
import { fetchStockDetail } from "../../api";
import { useParams } from "react-router-dom";
import { useEffect, useReducer } from "react";
import { initialState, CLEAR } from "./constant";
import Button from "../../common/components/Button";
import FlexBox from "../../common/components/Box/Flex";
import ErrorBoundary from "../../common/ui/ErrorBoundary";
import useRouteNavigation from "../../hooks/useRouteNavigation";
import SelectComponent from "../../common/components/Select/Select";
import fetchStockDetailReducer from "../../api/reducer/stock-reducers/stock-detail";

let intervalTimer: number | null | undefined = null;

const Home = () => {
  const { symbol } = useParams();
  const { previousRoute, forwardRoute } = useRouteNavigation();
  const [{ data, loading }, dispatch] = useReducer(
    fetchStockDetailReducer,
    initialState
  );

  useEffect(() => {
    fetchStockDetail(symbol, dispatch);
    return () => {
      const controller = new AbortController();
      controller.abort();
    };
  }, [symbol]);

  const updateAPIInterval = (value: string | []): void => {
    const numericValue = +value;

    if (value === CLEAR) {
      clearInterval(intervalTimer);
      intervalTimer = null;
    }

    if (numericValue > 0) {
      intervalTimer = setInterval(() => {
        fetchStockDetail(symbol, dispatch, numericValue);
      }, numericValue);
    }
  };

  return (
    <ErrorBoundary>
      <Header title="Stock Detail" />
      <FilterContainer>
        <SelectComponent
          options={[
            {
              label: "3 seconds",
              value: "3000",
            },
            {
              label: "10 seconds",
              value: "10000",
            },
            {
              label: CLEAR,
              value: CLEAR,
            },
          ]}
          placeholder="Auto Refresh Time"
          onChange={updateAPIInterval}
        />
        <StockTable isLoading={loading} data={data} key={data.Symbol} />
        <FlexBox gap="40px">
          <Button onClick={previousRoute}>Back</Button>
          <Button onClick={forwardRoute}>Next</Button>
        </FlexBox>
      </FilterContainer>
    </ErrorBoundary>
  );
};

export default Home;

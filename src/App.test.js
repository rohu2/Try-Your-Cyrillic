import { render, screen } from '@testing-library/react';
import App from './App';
import {convertSymbols} from './App';




test('converts $ and _ (underscores) into single-quotes and spaces respectively ', ()=>{
expect(convertSymbols('Ron$s_App$s_test')).toBe("Ron's App's test")
//expect(convertSymbols('Ron$s_App$s_test')).toEqual("Ron's App's test")

}
)
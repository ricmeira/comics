import React from 'react';
import * as axios from "axios";
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';

import ComicsListPage from './ComicsListPage';
import Paginator from '../../components/UI/Paginator/Paginator';

const whenStable = async () =>
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

jest.mock("axios");

const exampleResult = { 
    data: {
        data: {
             results:
              [
                  {
                    id: 1,
                    title: "test",
                    description: "test",
                  }
              ]
            }
        }
    };

describe('<ComicsListPage />', () => {
	const renderComponent = () => {
		return shallow(<ComicsListPage />);
	};

	beforeEach(() => {
		jest.clearAllMocks();
	});

	afterAll(() => {
		jest.resetAllMocks();
	});

	it('should render', () => {
		const wrapper = renderComponent();
		expect(wrapper.find('.Main')).toHaveLength(1);
	});

	it('should not have send email button when initialized', () => {
		const wrapper = renderComponent();
        expect(wrapper.find('#send_email_button')).toHaveLength(0);
	});

    it('should have search button disabled when search input is empty', async () => {
		const wrapper = renderComponent();

        expect(wrapper.find("#search_button").prop('disabled')).toBeTruthy();
	});

    it('should render not found error message when axios return with 0 objects', async () => {
        axios.get.mockImplementation(() => Promise.resolve({ data: { data: { results: []}}}));
		const wrapper = renderComponent();
        wrapper.find("#search_input").simulate('change', {target: {value: 'test'}});
        wrapper.find("#search_button").simulate("click");

        await whenStable();

        expect(wrapper.find('#error_message').text()).toEqual('Nenhum quadrinho com esse titulo foi encontrado.');
	});

    it('should render error message when axios api call rejects', async () => {
        axios.get.mockImplementation(() => Promise.reject({ }));
		const wrapper = renderComponent();
        wrapper.find("#search_input").simulate('change', {target: {value: 'test'}});
        wrapper.find("#search_button").simulate("click");

        await whenStable();

        expect(wrapper.find('#error_message').text()).toEqual('Houve um problema ao chamar o serviço. Tente novamente.');
	});

    it('should show Paginator if promise resolver with results', async () => {
        axios.get.mockImplementation(() => Promise.resolve(exampleResult));
		const wrapper = renderComponent();
        wrapper.find("#search_input").simulate('change', {target: {value: 'test'}});
        wrapper.find("#search_button").simulate("click");

        await whenStable();

        expect(wrapper.containsMatchingElement(<Paginator />)).toEqual(true);
	});

});
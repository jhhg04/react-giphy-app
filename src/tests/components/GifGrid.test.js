import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';

describe('Pruebas en el <GifGrid />', () => {
  const category = 'One Punch';
  test('should mostrarse correctamente', () => {
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should mostrar items cuando se cargan imagenes useFetchGifs', () => {
    const wrapper = shallow(<GifGrid category={category} />);
  });
});

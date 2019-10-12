import React from 'react';

import IconMenuList, { makeStyles } from 'components/IconMenuList';

import { iconMenuListData } from 'stories/mocking.data';

export default {
  title: 'Component - IconMenuList',
};

export const vertialList = () => <IconMenuList items={iconMenuListData} />;

export const divideIntoMultiList = () => <IconMenuList items={iconMenuListData} divideIntoMultiList={true} />;
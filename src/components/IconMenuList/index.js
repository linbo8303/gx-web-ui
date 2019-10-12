import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { makeStylesWithProps } from 'utils/mui';

/**
 * @param {object} props - Custom style properties
 */
export const makeStyles = makeStylesWithProps((theme, props) => ({
  
}));

/**
 * 
 * @param {object} props 
 * @property {object} props.children
 * @property {object} props.header
 * @property {object} props.sider
 */
export default function IconMenuList(props) {
  const classes = props.classes || makeStyles();
  let { items, divideIntoMultiList } = props;

  if (divideIntoMultiList) {
    items = items.reduce((result, item) => {
      if (item.divider) {
        result.push(item);
        result.push({ list: true, items: [] });
      } else {
        result[result.length-1].items.push(item);
      }

      return result;
    }, [{ list: true, items: [] }]); 
  } 

  const listCreator = listItems => <List>
    {listItems.map((item, index) => ( item.divider ? <Divider /> :
      <ListItem button key={item.text} onClick={item.onClick}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItem>
    ))}
  </List>;

  return divideIntoMultiList ? <React.Fragment>{ items.map(item => item.list ? listCreator(item.items) : <Divider />) }</React.Fragment> : listCreator(items);
}
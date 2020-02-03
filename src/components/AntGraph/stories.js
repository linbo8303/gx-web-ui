import React from 'react';

import AntGraph, { makeStyles } from 'components/AntGraph';
import G6 from '@antv/g6';
import Hierarchy from '@antv/hierarchy';

import data from 'stories/files/kg.json';
import treeData from 'stories/files/kt.json';

//const data2 = { nodes: data.nodes.map(n => ({ ...n })), edges: data.edges.map(e => ({ ...e })) };

const data1 = {
  // 点集
  nodes: [{
    id: 'node1', // String，该节点存在则必须，节点的唯一标识
    x: 100,      // Number，可选，节点位置的 x 值
    y: 200       // Number，可选，节点位置的 y 值
  },{
    id: 'node2', // String，该节点存在则必须，节点的唯一标识
    x: 300,      // Number，可选，节点位置的 x 值
    y: 200       // Number，可选，节点位置的 y 值
 }],
  // 边集
  edges: [{
    source: 'node1', // String，必须，起始点 id
    target: 'node2'  // String，必须，目标点 id
  }]
};

export default {
  title: 'Component - AntGraph',
};

export const simpleGraph1 = () => <AntGraph data={data1} />;
export const knowledgeGraph1 = () => <AntGraph data={data} />;
export const styledKnowledgeGraph1 = () => <AntGraph data={data}
  defaultNode={{
    size: 30,              // 节点大小
    // ...                 // 节点的其他配置
    // 节点样式配置
    style: {               
      fill: 'steelblue',   // 节点填充色
      stroke: '#666',      // 节点描边色
      lineWidth: 1         // 节点描边粗细
    },
    // 节点上的标签文本配置
    labelCfg: {       
      // 节点上的标签文本样式配置
      style: {             
        fill: '#fff'       // 节点标签文字颜色
      }
    }
  }}

  // 边在默认状态下的样式配置（style）和其他配置
  defaultEdge={{
    // ...                 // 边的其他配置
    // 边样式配置
    style: {               
      opacity: 0.6,        // 边透明度
      stroke: 'grey'       // 边描边颜色
    },
    // 边上的标签文本配置
    labelCfg: {            
      autoRotate: true     // 边上的标签文本根据边的方向旋转
    }
  }}  

  fitView={false}

  layout = {{                // Object，可选，布局的方法及其配置项，默认为 random 布局。
    type: 'force',         // 指定为力导向布局
    preventOverlap: true,  // 防止节点重叠
    linkDistance: 200 // 指定边距离为100
    // nodeSize: 30        // 节点大小，用于算法中防止节点重叠时的碰撞检测。由于已经在上一节的元素配置中设置了每个节点的 size 属性，则不需要在此设置 nodeSize。
  }}

  onInit={g => {
    g.node(node => {
      let n = {
        id: node.id,
        label: node.name,
        labelCfg: {
          position: node.children && node.children.length > 0 ? 'left' : 'right'
        }
      };

      switch (node.type) {
        case 'taxonomy':
          n.shape = 'circle'; 
        break;

        case 'knowledge':
          n.shape = 'rect'; 
        break;

        case 'skill':
          n.shape = 'rect'; 
        break;
      }

      return n; 
    });
  }}
 />;

 export const knowledgetreeGraph1 = () => <AntGraph tree={true} data={treeData} 
    pixelRatio={2}
    modes={{
      default: [{
          type: 'collapse-expand',
          onChange: function onChange(item, collapsed) {
            var data = item.get('model').data;
            data.collapsed = collapsed;
            return true;
          }
      }, 'drag-canvas', 'zoom-canvas']
    }}
    /*
    layout = {(data) => {
        var result = Hierarchy.dendrogram(data, {
          direction: 'LR', // H / V / LR / RL / TB / BT
          nodeSep: 20,
          rankSep: 100
        });
        G6.Util.radialLayout(result);
        return result;
      }}*/
      defaultNode={{
        size: 16,
        anchorPoints: [[0, 0.5], [1, 0.5]],
        style: {
          fill: '#40a9ff',
          stroke: '#096dd9'
        }
      }}
      defaultEdge={{
        shape: 'cubic-horizontal',
        style: {
          stroke: '#A3B1BF'
        }
      }}

      layout={{
        type: 'dendrogram',
        direction: 'LR', // H / V / LR / RL / TB / BT
        nodeSep: 30,
        rankSep: 100
      }}  

    onInit={g => {
      g.node(node => {
      let n = {
        id: node.id,
        label: node.name
      };

      switch (node.type) {
        case 'taxonomy':
          n.shape = 'circle'; 
        break;

        case 'knowledge':
          n.shape = 'rect'; 
        break;

        case 'skill':
          n.shape = 'rect'; 
        break;
      }

      return n; 
    });
    }}    
  />;
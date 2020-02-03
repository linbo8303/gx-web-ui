import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';

import { makeStylesWithProps } from 'utils/mui';

/**
 * @param {object} props - Custom style properties
 */
export const makeStyles = makeStylesWithProps((theme, props) => ({
  
}));

export default function AntGraph(props) {
    const { width = 800, height = 500, tree, data, onInit, ...customProps } = props;
    const ref = useRef();

    let graph;

    useEffect(() => {
        if (!graph) {
            graph = new (tree ? G6.TreeGraph : G6.Graph)({
                container: ReactDOM.findDOMNode(ref.current),
                width,
                height,            
                fitView: 'autoZoom',
                modes: {
                    default: [ 'panCanvas' ]
                },
                ...customProps
            });

            if (onInit) {
                onInit(graph);
            }
        }      

        graph.data(data);
        graph.render();
    }, []);
    
    return (
        <div ref={ref}></div>
    );
}

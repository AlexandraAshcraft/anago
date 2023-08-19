import React, { useState } from 'react';
import DropdownTreeSelect from 'react-dropdown-tree-select';
import { useRouteLoaderData } from 'react-router-dom';

const Dropdown = () => {
  const clusterData: any = useRouteLoaderData('cluster');

  const [data, setData] = useState([]);

  // const prepareData = data => {
  //   data.splice(0, 0, {
  //     label: 'Select All',
  //     value: 'selectAll',
  //     className: 'select-all',
  //   });
  //   setData(data);
  // };

  //prepareData(clusterData);

  const dataItems = data => {
    let dataObj = [{}];
    const nodes = {
      'label' : 'Nodes',
      'children' : ['']
    }
    const namespaces = {
      'label' : 'Namespaces',
      'children' : ['']
    }

    data.nodes.forEach(node => {
      const childObj:any = {
        'label' : node.name,
      }
      nodes['children'].push(childObj);
    })

    data.namespaces.forEach(namespace => {
      const childObj:any = {
        'label' : namespace.name,
      }
      namespaces['children'].push(childObj);
    })
    return dataObj = [nodes, namespaces]
  }

  const dropdownItems = dataItems(clusterData);

  console.log('prepared data', dropdownItems);

  const toggleAll = checked => {
    const dataArr:any = [...data]
    for (let i = 1; i < dataArr.length; i++) {
      dataArr[i].checked = checked;
    }
    setData(dataArr)
  };

  const handleChange:any = ({ value, checked }) => {
    if (value === 'selectAll') toggleAll(checked);
  };

  return (
    <div>
      <DropdownTreeSelect data={data} onChange={handleChange} />
    </div>
  );
};


export default Dropdown;
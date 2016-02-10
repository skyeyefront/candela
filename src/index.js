import { App } from './app';

require('bootstrap-webpack');
require('nvd3/build/nv.d3.min.css');
require('../styles/main.styl');

window.onload = () => {
  let newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'dash-container');
  document.body.appendChild(newDiv);
  let app = new App({
    el: '.dash-container',
    name: 'Beta Ground Truth',
    day: '2014-06-03',
    branch: 'master',
    trend: [{
      success: 3,
      bad: 1,
      fail: 6,
      date: '2014-05-27'
    }, {
      success: 2,
      bad: 3,
      fail: 5,
      date: '2014-05-28'
    }, {
      success: 4,
      bad: 5,
      fail: 1,
      date: '2014-05-29'
    }, {
      success: 3,
      bad: 3,
      fail: 4,
      date: '2014-05-30'
    }, {
      success: 7,
      bad: 2,
      fail: 1,
      date: '2014-05-31'
    }, {
      success: 6,
      bad: 4,
      fail: 0,
      date: '2014-06-01'
    }, {
      success: 10,
      bad: 0,
      fail: 0,
      date: '2014-06-02'
    }, {
      success: 8,
      bad: 1,
      fail: 1,
      date: '2014-06-03'
    }],
    totalDatasets: 15,
    totalDistance: 1243,
    percentErrorByDataset: [{
      dataset: 'dataset0.jpg',
      algorithm: 'alga',
      length: 300,
      mean: 11,
      current: 5,
      target: 7,
      warning: 10,
      fail: 25,
      max: 50
    }, {
      dataset: 'dataset0.jpg',
      algorithm: 'sm',
      length: 300,
      mean: 11,
      current: 5,
      target: 7,
      warning: 10,
      fail: 25,
      max: 50
    }, {
      dataset: 'dataset0.jpg',
      algorithm: 'ba',
      length: 300,
      mean: 11,
      current: 5,
      target: 7,
      warning: 10,
      fail: 25,
      max: 50
    }, {
      dataset: 'dataset1',
      algorithm: 'alga',
      length: 300,
      mean: 11,
      current: 5,
      target: 7,
      warning: 10,
      fail: 25,
      max: 50
    }, {
      dataset: 'dataset1',
      algorithm: 'sm',
      length: 300,
      mean: 15,
      current: 14,
      target: 7,
      warning: 10,
      fail: 25,
      max: 50
    }, {
      dataset: 'dataset1',
      algorithm: 'ba',
      length: 300,
      mean: 11,
      current: 5,
      target: 7,
      warning: 10,
      fail: 25,
      max: 50
    }, {
      dataset: 'dataset2',
      algorithm: 'alga',
      length: 300,
      mean: 11,
      current: 5,
      target: 7,
      warning: 10,
      fail: 25,
      max: 50
    }, {
      dataset: 'dataset2',
      algorithm: 'sm',
      length: 300,
      mean: 11,
      current: 5,
      target: 7,
      warning: 10,
      fail: 25,
      max: 50
    }, {
      dataset: 'dataset2',
      algorithm: 'ba',
      length: 300,
      mean: 11,
      current: 5,
      target: 7,
      warning: 10,
      fail: 25,
      max: 50
    }, {
      dataset: 'dataset3',
      algorithm: 'alga',
      length: 300,
      mean: 11,
      current: 28,
      target: 7,
      warning: 10,
      fail: 25,
      max: 50
    }, {
      dataset: 'dataset3',
      algorithm: 'sm',
      length: 300,
      mean: 11,
      current: 5,
      target: 7,
      warning: 10,
      fail: 25,
      max: 50
    }, {
      dataset: 'dataset3',
      algorithm: 'ba',
      length: 300,
      mean: 11,
      current: 5,
      target: 7,
      warning: 10,
      fail: 25,
      max: 27,
      callback: function () { console.log('dataset3-ba'); }
    }, {
      dataset: 'dataset2',
      algorithm: 'com',
      length: 300,
      mean: 11,
      current: 3,
      target: 7,
      warning: 10,
      fail: 25,
      max: 27,
      callback: function () { console.log('dataset2-com'); }
    }],
    datasetLabelMap: {
      'dataset2': 'rotation',
      'dataset1': 'label'
    },
    datasetMap: {
      'dataset3': 'http://www.trackerdash.com',
      'dataset2': function () { console.log('dataset 2'); }
    },
    trajectoryMap: {
      'dataset0.jpg': function () { console.log('dataset 0 -- trajectory'); },
      'dataset1': 'https://github.com'
    },
    algorithms: [{
      name: 'Visual-Inertial Odometry',
      abbreviation: 'ALGA'
    }, {
      name: 'ALGB (Pose Graph)',
      abbreviation: 'SM'
    }, {
      name: 'Bundle Adjustment',
      abbreviation: 'BA'
    }, {
      name: 'Concurrent Odometry and Mapping',
      abbreviation: 'ALGC'
    }]
  });
  app.render();
};

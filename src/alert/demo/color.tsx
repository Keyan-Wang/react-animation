import React from 'react';
import Alert from '../index';
import '../style/index.less'

export default () => <>
    <Alert kind="warning">Warning Text</Alert>
    <Alert kind="negative">Error Text</Alert>
    <Alert kind="info">Info Text</Alert>
    <Alert kind="positive">Success Tips</Alert>
</>;

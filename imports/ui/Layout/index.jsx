import React from 'react';
import { Container } from 'semantic-ui-react';

import Navigation from '../Navigation';

export default ({ children }) => (
    <Container textAlign="left" className={styles.wrapper}>
        <Navigation />
        {children}
    </Container>
)
import React from 'react';

import { withAuthentication } from '../Auth/Auth.jsx';

export default withAuthentication(() => <h1>Welcome!</h1>);
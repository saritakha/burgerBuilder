import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.css';

const layout = (props) => (
<Aux>
  <div> Toolbar sidedrawer, Backdrop</div>
    <main className={styles.content}>
      { props.children }
    </main>
</Aux>
 
);

export default layout;
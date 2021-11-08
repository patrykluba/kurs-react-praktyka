import React from 'react'
import Layout from '../../components/Layout';
import withLogin from '../../HOCs/withLogin';

const PanelPage = () => {    
    return (
        <Layout>
            <div>
                Strona panelu
            </div>
        </Layout>
    )
}

export default withLogin(PanelPage);
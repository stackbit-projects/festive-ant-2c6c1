import React from 'react';
import Head from 'next/head';
import _ from 'lodash';

import {withPrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>{_.get(this.props, 'page.title', null) && (_.get(this.props, 'page.title', null) + ' - ')}{_.get(this.props, 'data.config.title', null)}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1, userScalable=no" />
                    <meta name="description" content={_.get(this.props, 'page.excerpt', null) || _.get(this.props, 'data.config.description', null)}/>
                    <meta name="google" content="notranslate" />
                    {(_.get(this.props, 'page.layout', null) === 'post') && ( 
                    _.get(this.props, 'page.canonical_url', null) && (
                    <link rel="canonical" href={_.get(this.props, 'page.canonical_url', null)}/>
                    )
                    )}
                    {_.get(this.props, 'data.config.favicon', null) && (
                    <link rel="icon" href={withPrefix(_.get(this.props, 'data.config.favicon', null))}/>
                    )}
                </Head>
                <div className="wrapper">
                    <Header {...this.props} />
                    <div className="container">
                        {this.props.children}
                    </div>
                    <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}

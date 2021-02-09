// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import user defined schema types
import config from './config.js';
import header from './header.js';
import footer from './footer.js';
import author from './author.js';
import advanced from './advanced.js';
import page from './page.js';
import post from './post.js';
import action from './action.js';
import section_content from './section_content.js';
import section_hero from './section_hero.js';
import section_posts from './section_posts.js';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    config,
    header,
    footer,
    author,
    advanced,
    page,
    post,
    action,
    section_content,
    section_hero,
    section_posts
    ])
})

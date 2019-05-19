<template>
  <section class="markdown-content" v-html="MdToHtml">
  </section>
</template>

<script>

import MarkdownIt from 'markdown-it';
import Anchor from 'markdown-it-anchor';
import TocDoneRight from 'markdown-it-toc-done-right';
import HtmlParse from '@/libs/htmlParser/parse'


export default {
  name: "markdown",
  data(){
    return {
      mdRender:null
    }
  },
  props:{
    md:{
      type:[String],
      default:''
    }
  },
  computed:{
    MdToHtml(newVal){
      //et md = 'toc ' + this.md;
      let md = 'toc ' + '# markdown-it rulezz!\n\n## with markdown-it-toc-done-right rulezz even more!';
      let ret = this.mdRender.render(md);
      console.log(HtmlParse(ret)[0]);
      return ret
    } 
  },
  created(){
    this.mdRender = new MarkdownIt({
      html:         true,        // Enable HTML tags in source ,defalut false
      xhtmlOut:     true,        // Use '/' to close single tags (<br />).,defalut false
                                  // This is only for full CommonMark compatibility.,defalut false
      breaks:       true,        // Convert '\n' in paragraphs into <br>,defalut false
      langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be,defalut language-
                                  // useful for external highlighters.
      linkify:      false,        // Autoconvert URL-like text to links,defalut false

      // Enable some language-neutral replacement + quotes beautification
      typographer:  false,// defalut false

      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: '“”‘’',//,'“”‘’'

      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externally.
      // If result starts with <pre... internal wrapper is skipped.
      highlight: function (/*str, lang*/) { return ''; },//defalut false
    })
    .use(Anchor,{
      permalink: true,
      permalinkBefore: true,
      permalinkClass:'header-link',
      permalinkSymbol: '',
      slugify(slug){
        return `${decodeURIComponent(slug)}`
      }
    })
    .use(TocDoneRight,{
      placeholder:'toc',
      format(x, htmlencode) {
        return `<span>${x}</span>`;
      }
    });

    this.$once('hook:beforeDestroy',()=>{
      this.mdRender = null;
    })
  },
  methods:{
    
  }
};
</script>


import PluginId from '../pluginId'

import Embed from '@editorjs/embed'
// import Table from '@editorjs/table'
import List from '@editorjs/list'
// import Warning from '@editorjs/warning'
// import Code from '@editorjs/code'
// import LinkTool from '@editorjs/link'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
// import Marker from '@editorjs/marker'
// import CheckList from '@editorjs/checklist'
// import Delimiter from '@editorjs/delimiter'
// import InlineCode from '@editorjs/inline-code'
import Underline from '@editorjs/underline'

const customTools = {
  embed: Embed,
  header: {
    class: Header,
    inlineToolbar: true,
  },
  // table: {
  //   class: Table,
  //   inlineToolbar: true,
  // },
  list: {
    class: List,
    inlineToolbar: true,
  },
  // warning: {
  //   class: Warning,
  //   inlineToolbar: true,
  //   config: {
  //     titlePlaceholder: 'Title',
  //     messagePlaceholder: 'Message',
  //   },
  // },
  // checklist: {
  //   class: CheckList,
  //   inlineToolbar: true,
  // },
  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: 'Quote',
      captionPlaceholder: 'Quote`s author',
    },
  },
  // code: Code,
  underline: Underline,
  // LinkTool: {
  //   class: LinkTool,
  //   config: {
  //     endpoint: `/api/${PluginId}/link`,
  //   },
  // },
  raw: {
    class: Raw,
    inlineToolbar: true,
  },
  // marker: {
  //   class: Marker,
  //   inlineToolbar: true,
  // },
  // delimiter: Delimiter,
  // inlineCode: InlineCode,
}

export default customTools

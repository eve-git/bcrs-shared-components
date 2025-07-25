import{r as t,m as e,B as g}from"./BaseAddress-d6809cc6.js";import{V as u}from"./vuetify-b9fb25b0.js";import"./vue.esm-b1e57a2f.js";import"./params-036f571e.js";import"./_plugin-vue2_normalizer-b11a0120.js";import"./Watch-62f8b699.js";import"./lodash-f6b38868.js";import"./_commonjsHelpers-de833af9.js";import"./validation-mixin-aefd6a63.js";const V={title:"component/BaseAddress"},p={streetAddress:{required:t,maxLength:e(50)},streetAddressAdditional:{maxLength:e(50)},addressCity:{required:t,maxLength:e(40)},addressCountry:{required:t},addressRegion:{maxLength:e(2)},postalCode:{required:t,maxLength:e(15)},deliveryInstructions:{maxLength:e(80)}},c=(y,{argTypes:l})=>({vuetify:new u({iconfont:"mdi"}),props:Object.keys(l),components:{BaseAddress:g},template:'<BaseAddress v-bind="$props" />'}),s=c.bind({});s.args={editing:!0,schema:p,address:{}};const r=c.bind({});r.args={editing:!0,schema:p,address:{streetAddress:"1234 Sesame Street",streetAddressAdditional:"4th Floor",addressCity:"Victoria",addressRegion:"British Columbia",addressCountry:"Canada",postalCode:"V8N 1A1",deliveryInstructions:"Leave at front door"},noPoBox:!0,isInactive:!1};var a,o,d;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  vuetify: new Vuetify({
    iconfont: 'mdi'
  }),
  props: Object.keys(argTypes),
  components: {
    BaseAddress
  },
  template: '<BaseAddress v-bind="$props" />' // $props comes from args below
})`,...(d=(o=s.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  vuetify: new Vuetify({
    iconfont: 'mdi'
  }),
  props: Object.keys(argTypes),
  components: {
    BaseAddress
  },
  template: '<BaseAddress v-bind="$props" />' // $props comes from args below
})`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const w=["DefaultBaseAddress","FilledInBaseAddress"];export{s as DefaultBaseAddress,r as FilledInBaseAddress,w as __namedExportsOrder,V as default};
//# sourceMappingURL=BaseAddress.stories-a33b6825.js.map

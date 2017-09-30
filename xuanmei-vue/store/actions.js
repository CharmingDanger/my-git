import * as types from './type'

export default{
	NUMBER_HAVE:({commit})=>{
		commit(types.NUMBER_HAVE_SUCC);
	},
	NAME_HAVE:({commit})=>{
		commit(types.NAME_HAVE_SUCC);
	},
	NUMBER_NO:({commit})=>{
		commit(types.NUMBER_NO);
	}
}

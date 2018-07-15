var pages = {
	webtitle: {
		type: String,
	},
	owner: {
		type: String,
	},
  addr1: {
    type: String,
  },
  addr2: {
    type: String,
  },
addr3: {
  type: String,
},
zipcode: {
  type: String,
},
title: {
  type: String,
},
footer: {
  type: String,
},
city: {
  type: String,
},
phone: {
  type: String,
},
date: {
  type: Date,
},
likes: {
  type: Number,
},
contents: [{
  subtitle: {
    type: String,
  },
  description: {
    type: String,
  },
}]
};
module.exports = pages;

/*! grafana - v4.2.0 - 2017-03-22
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","test/specs/helpers","moment"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){c.describe("timeSrv",function(){var a=new d.default.ServiceTestContext,b={time:{from:"now-6h",to:"now"}};c.beforeEach(c.angularMocks.module("grafana.core")),c.beforeEach(c.angularMocks.module("grafana.services")),c.beforeEach(a.createService("timeSrv")),c.beforeEach(function(){a.service.init(b)}),c.describe("timeRange",function(){c.it("should return unparsed when parse is false",function(){a.service.setTime({from:"now",to:"now-1h"});var b=a.service.timeRange();c.expect(b.raw.from).to.be("now"),c.expect(b.raw.to).to.be("now-1h")}),c.it("should return parsed when parse is true",function(){a.service.setTime({from:"now",to:"now-1h"});var b=a.service.timeRange();c.expect(e.default.isMoment(b.from)).to.be(!0),c.expect(e.default.isMoment(b.to)).to.be(!0)})}),c.describe("init time from url",function(){c.it("should handle relative times",function(){a.$location.search({from:"now-2d",to:"now"}),a.service.init(b);var d=a.service.timeRange();c.expect(d.raw.from).to.be("now-2d"),c.expect(d.raw.to).to.be("now")}),c.it("should handle formated dates",function(){a.$location.search({from:"20140410T052010",to:"20140520T031022"}),a.service.init(b);var d=a.service.timeRange(!0);c.expect(d.from.valueOf()).to.equal(new Date("2014-04-10T05:20:10Z").getTime()),c.expect(d.to.valueOf()).to.equal(new Date("2014-05-20T03:10:22Z").getTime())}),c.it("should handle formated dates without time",function(){a.$location.search({from:"20140410",to:"20140520"}),a.service.init(b);var d=a.service.timeRange(!0);c.expect(d.from.valueOf()).to.equal(new Date("2014-04-10T00:00:00Z").getTime()),c.expect(d.to.valueOf()).to.equal(new Date("2014-05-20T00:00:00Z").getTime())}),c.it("should handle epochs",function(){a.$location.search({from:"1410337646373",to:"1410337665699"}),a.service.init(b);var d=a.service.timeRange(!0);c.expect(d.from.valueOf()).to.equal(1410337646373),c.expect(d.to.valueOf()).to.equal(1410337665699)}),c.it("should handle bad dates",function(){a.$location.search({from:"20151126T00010%3C%2Fp%3E%3Cspan%20class",to:"now"}),b.time.from="now-6h",a.service.init(b),c.expect(a.service.time.from).to.equal("now-6h"),c.expect(a.service.time.to).to.equal("now")})}),c.describe("setTime",function(){c.it("should return disable refresh if refresh is disabled for any range",function(){b.refresh=!1,a.service.setTime({from:"2011-01-01",to:"2015-01-01"}),c.expect(b.refresh).to.be(!1)}),c.it("should restore refresh for absolute time range",function(){b.refresh="30s",a.service.setTime({from:"2011-01-01",to:"2015-01-01"}),c.expect(b.refresh).to.be("30s")}),c.it("should restore refresh after relative time range is set",function(){b.refresh="10s",a.service.setTime({from:e.default([2011,1,1]),to:e.default([2015,1,1])}),c.expect(b.refresh).to.be(!1),a.service.setTime({from:"2011-01-01",to:"now"}),c.expect(b.refresh).to.be("10s")}),c.it("should keep refresh after relative time range is changed and now delay exists",function(){b.refresh="10s",a.service.setTime({from:"now-1h",to:"now-10s"}),c.expect(b.refresh).to.be("10s")})})})}}});
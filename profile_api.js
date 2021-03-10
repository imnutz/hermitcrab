var td = new Treasure({
  database: 'xxxxxxxxxx',
  writeKey: 'xxxxxxxxxx',
  host: 'xxxxxxxxxx',
  cdpHost: 'cdp-development.in.treasuredata.com'
})

var performance = window.performance
// measurement name
var pageview = 'pageview'
var globalid = 'globalid'
var trackevent = 'trackevent'
var addrecord = 'addrecord'
var usersegment = 'usersegment'

var pageview_start, pageview_end
var globalid_start, globalid_end
var trackevent_start, trackevent_end
var addrecord_start, addrecord_end
var usersegment_start, usersegment_end

td.setSignedMode()
td.set('$global', 'td_global_id', 'td_global_id')

td.ready(function() {
  performance.mark(pageview_start)
  td.trackPageview('pageview_3_0', function () {
    console.log('tracked pageview')
    performance.mark(pageview_end)
    performance.measure(pageview, pageview_start, pageview_end)

    performance.mark(globalid_start)
    td.fetchGlobalID(function (value) {
      console.log('yay: ', value)
      performance.mark(globalid_end)
      performance.measure(globalid, pageview_start, pageview_end)
    }, function () {
      console.log('nay')
    })
  })

  performance.mark(trackevent_start)
  td.trackEvent('track_event', {date_string: (new Date()).toString()}, function () {
    performance.mark(trackevent_end)
    performance.measure(trackevent, trackevent_start, trackevent_end)
    console.log('track event: yay')
  }, function () {
    console.log('track event: nay')
  })

  performance.mark(addrecord_start)
  td.addRecord('add_record', { ramen: 'ラーメン' }, function () {
    performance.mark(addrecord_end)
    performance.measure(addrecord, addrecord_start, addrecord_end)
    console.log('add record: yay')
  }, function () {
    console.log('add record: nay')
  })

  //email: 'someone@somewhere.com'
  performance.mark(usersegment_start)
  td.fetchUserSegments({
    audienceToken: ['xxxxxxxxxx'],
    keys: {
      city: 'Denver'
    }
  }, function () {
    performance.mark(usersegment_end)
    performance.measure(usersegment, usersegment_start, usersegment_end)
    console.log('user segment: yay')
  }, function () {
    console.log('user segment: nay')
  })
})


exports.referer_yml_str = `
# #######################################################################################################
#
# ALL SUPPORTED REFERERS
#
# Broken down into:
#
# 1. Medium-unknown providers
# 2. Email providers
# 3. Social providers
# 4. Search providers
# 5. Paid media


# #######################################################################################################
#
# MEDIUM-UNKNOWN PROVIDERS
#
# We know the source, but not the medium.
# This section is useful for reducing false positives in the other sections

unknown:

  Google:
    domains:
      - support.google.com
      - developers.google.com
      - maps.google.com
      - accounts.google.com
      - drive.google.com
      - sites.google.com
      - groups.google.com
      - groups.google.co.uk

  Yahoo!:
    domains:
      - finance.yahoo.com
      - news.yahoo.com
      - eurosport.yahoo.com
      - sports.yahoo.com
      - astrology.yahoo.com
      - travel.yahoo.com
      - answers.yahoo.com
      - screen.yahoo.com
      - weather.yahoo.com
      - messenger.yahoo.com
      - games.yahoo.com
      - shopping.yahoo.net
      - movies.yahoo.com
      - cars.yahoo.com
      - lifestyle.yahoo.com
      - omg.yahoo.com
      - match.yahoo.net

  Yandex Maps:
    parameters:
      - text
    domains:
      - maps.yandex.ru
      - maps.yandex.ua
      - maps.yandex.com
      - maps.yandex.by
      - n.maps.yandex.ru

# #######################################################################################################
#
# EMAIL PROVIDERS

email:

  126 Mail:
    domains:
      - mail.126.com

  163 Mail:
    domains:
      - mail.163.com

  2degrees:
    domains:
      - webmail.2degreesbroadband.co.nz

  Adam Internet:
    domains:
      - webmail.adam.com.au

  AOL Mail:
    domains:
      - mail.aol.com

  Beeline:
    domains:
      - post.ru

  Bigpond:
    domains:
      - webmail.bigpond.com
      - webmail2.bigpond.com
      - email.telstra.com
      - basic.messaging.bigpond.com

  Commander:
    domains:
      - webmail.commander.net.au

  Daum Mail:
    domains:
      - mail2.daum.net
      - mail.daum.net

  Dodo:
    domains:
      - webmail.dodo.com.au

  E1.ru:
    domains:
      - mail.e1.ru

  Freenet:
    domains:
      - webmail.freenet.de

  Gmail:
    domains:
      - mail.google.com
      - inbox.google.com

  iiNet:
    domains:
      - webmail.iinet.net.au
      - mail.iinet.net.au

  Inbox.com:
    domains:
      - inbox.com

  iPrimus:
    domains:
      - webmail.iprimus.com.au

  Mail.ru:
    domains:
      - e.mail.ru
      - touch.mail.ru

  Mastermail:
    domains:
      - mastermail.ru
      - m.mastermail.ru

  Mynet Mail:
    domains:
      - mail.mynet.com

  Naver Mail:
    domains:
      - mail.naver.com

  Netspace:
    domains:
      - webmail.netspace.net.au

  Optus Zoo:
    domains:
      - webmail.optuszoo.com.au
      - webmail.optusnet.com.au

  Orange Webmail:
    domains:
      - orange.fr/webmail

  Outlook.com:
    domains:
      - mail.live.com
      - outlook.live.com

  QIP:
    domains:
      - mail.qip.ru

  QQ Mail:
    domains:
      - mail.qq.com
      - exmail.qq.com

  Rambler:
    domains:
      - mail.rambler.ru 

  Seznam Mail:
    domains:
      - email.seznam.cz

  Sibmail:
    domains:
      - sibmail.com

  Ukr.net:
    domains:
      - mail.ukr.net

  Virgin:
    domains:
      - webmail.virginbroadband.com.au

  Vodafone:
    domains:
      - webmail.vodafone.co.nz

  Westnet:
    domains:
      - webmail.westnet.com.au

  Yandex:
    domains:
      - mail.yandex.ru
      - mail.yandex.com
      - mail.yandex.kz
      - mail.yandex.ua
      - mail.yandex.by

  Yahoo! Mail:
    domains:
      - mail.yahoo.net
      - mail.yahoo.com
      - mail.yahoo.co.uk
      - mail.yahoo.co.jp

  Zoho:
    domains:
      - mail.zoho.com

# #######################################################################################################
#
# SOCIAL PROVIDERS

social:

  Facebook:
    domains:
      - facebook.com
      - fb.me
      - m.facebook.com
      - l.facebook.com
      - lm.facebook.com

  Qzone:
    domains:
      - qzone.qq.com

  Habbo:
    domains:
      - habbo.com

  Twitter:
    domains:
      - twitter.com
      - t.co

  Instagram:
    domains:
      - instagram.com
      - l.instagram.com

  Youtube:
    domains:
      - youtube.com
      - youtu.be

  Vimeo:
    domains:
      - vimeo.com

  Renren:
    domains:
      - renren.com

  Windows Live Spaces:
    domains:
      - login.live.com

  LinkedIn:
    domains:
      - linkedin.com
      - lnkd.in

  Bebo:
    domains:
      - bebo.com

  Vkontakte:
    domains:
      - m.vk.com
      - vk.com
      - away.vk.com
      - vkontakte.ru

  Tagged:
    domains:
      - login.tagged.com

  Orkut:
    domains:
      - orkut.com

  Myspace:
    domains:
      - myspace.com

  Friendster:
    domains:
      - friendster.com

  Badoo:
    domains:
      - badoo.com

  hi5:
    domains:
      - hi5.com

  Netlog:
    domains:
      - netlog.com

  Flixster:
    domains:
      - flixster.com

  MyLife:
    domains:
      - mylife.ru

  Paper.li:
    domains:
      - paper.li

  Classmates:
    domains:
      - classmates.com

  GitHub:
    domains:
      - github.com

  Google+:
    domains:
      - url.google.com
      - plus.google.com

  Douban:
    domains:
      - douban.com

  Odnoklassniki:
    domains:
      - odnoklassniki.ru
      - ok.ru

  Viadeo:
    domains:
      - viadeo.com

  Flickr:
    domains:
      - flickr.com

  WeeWorld:
    domains:
      - weeworld.com

  Last.fm:
    domains:
      - lastfm.ru

  MyHeritage:
    domains:
      - myheritage.com

  Xanga:
    domains:
      - xanga.com

  Mixi:
    domains:
      - mixi.jp

  Cyworld:
    domains:
      - global.cyworld.com

  Gaia Online:
    domains:
      - gaiaonline.com

  Skyrock:
    domains:
      - skyrock.com

  BlackPlanet:
    domains:
      - blackplanet.com

  myYearbook:
    domains:
      - myyearbook.com

  Fotolog:
    domains:
      - fotolog.com

  Friends Reunited:
    domains:
      - friendsreunited.com

  LiveJournal:
    domains:
      - livejournal.ru

  StudiVZ:
    domains:
      - studivz.net

  StackOverflow:
    domains:
      - stackoverflow.com

  Sonico.com:
    domains:
      - sonico.com

  Pinterest:
    domains:
      - pinterest.com

  Plaxo:
    domains:
      - plaxo.com

  Geni:
    domains:
      - geni.com

  Tuenti:
    domains:
      - tuenti.com

  XING:
    domains:
      - xing.com

  Taringa!:
    domains:
      - taringa.net

  Tumblr:
    domains:
      - tumblr.com
      - t.umblr.com

  Nasza-klasa.pl:
    domains:
      - nk.pl

  StumbleUpon:
    domains:
      - stumbleupon.com

  SourceForge:
    domains:
      - sourceforge.net

  Hyves:
    domains:
      - hyves.nl

  WAYN:
    domains:
      - wayn.com

  Buzznet:
    domains:
      - buzznet.com

  Multiply:
    domains:
      - multiply.com

  Foursquare:
    domains:
      - foursquare.com

  vKruguDruzei.ru:
    domains:
      - vkrugudruzei.ru

  Mail.ru:
    domains:
      - my.mail.ru

  MoiKrug.ru:
    domains:
      - moikrug.ru

  Reddit:
    domains:
      - reddit.com

  Hacker News:
    domains:
      - news.ycombinator.com

  Identi.ca:
    domains:
      - identi.ca

  Weibo:
    domains:
      - weibo.com
      - t.cn

  Delicious:
    domains:
      - delicious.com

  Pocket:
    domains:
      - getpocket.com

  ITU Sozluk:
    domains:
      - itusozluk.com

  Instela:
    domains:
      - instela.com

  Eksi Sozluk:
    domains:
      - Sozluk.com
      - sourtimes.org

  Uludag Sozluk:
    domains:
      - uludagsozluk.com
      - ulusozluk.com

  Inci Sozluk:
    domains:
      - inci.sozlukspot.com
      - incisozluk.com
      - incisozluk.cc

  Hocam.com:
    domains:
      - hocam.com

  Donanimhaber:
    domains:
      - donanimhaber.com

  Disqus:
    domains:
      - redirect.disqus.com
      - disq.us
      - disqus.com

  Quora:
    domains:
      - quora.com

  Skype:
    domains:
      - web.skype.com

  WhatsApp:
    domains:
      - web.whatsapp.com

  Whirlpool:
    domains:
      - forums.whirlpool.net.au

# #######################################################################################################
#
# SEARCH PROVIDERS

search:

  1.cz:
    parameters:
      - q
    domains:
      - 1.cz

  # 123people TODO

  1&1:
    parameters:
      - q
    domains:
      - search.1and1.com

  1und1:
    parameters:
      - su
    domains:
      - search.1und1.de

  2gis:
    domains:
      - 2gis.ru
      - www.2gis.ru
      - link.2gis.ru
      - www.link.2gis.ru

  360.cn:
    parameters:
      - q
    domains:
      - so.360.cn
      - www.so.com

  Abacho:
    parameters:
      - q
    domains:
      - www.abacho.de
      - www.abacho.com
      - www.abacho.co.uk
      - www.se.abacho.com
      - www.tr.abacho.com
      - www.abacho.at
      - www.abacho.fr
      - www.abacho.es
      - www.abacho.ch
      - www.abacho.it

  ABCsøk:
    parameters:
      - q
    domains:
      - abcsolk.no
      - verden.abcsok.no

  Acoon:
    parameters:
      - begriff
    domains:
      - www.acoon.de

  Alexa:
    parameters:
      - q
    domains:
      - alexa.com
      - search.toolbars.alexa.com

  Alice Adsl:
    parameters:
      - q
    domains:
      - rechercher.aliceadsl.fr

  AllTheWeb:
    parameters:
      - q
    domains:
      - www.alltheweb.com

  all.by:
    parameters:
      - query
    domains:
      - all.by

  Altavista:
    parameters:
      - q
    domains:
      - www.altavista.com
      - search.altavista.com
      - listings.altavista.com
      - altavista.de
      - altavista.fr
      - be-nl.altavista.com
      - be-fr.altavista.com

  Amazon:
    parameters:
      - keywords
    domains:
      - amazon.com
      - www.amazon.com

  AOL:
    parameters:
      - q
      - query
    domains:
      - search.aol.com
      - search.aol.it
      - aolsearch.aol.com
      - aolsearch.com
      - www.aolrecherche.aol.fr
      - www.aolrecherches.aol.fr
      - www.aolimages.aol.fr
      - aim.search.aol.com
      - www.recherche.aol.fr
      - recherche.aol.fr
      - find.web.aol.com
      - recherche.aol.ca
      - aolsearch.aol.co.uk
      - search.aol.co.uk
      - aolrecherche.aol.fr
      - sucheaol.aol.de
      - suche.aol.de
      - suche.aolsvc.de
      - aolbusqueda.aol.com.mx
      - alicesuche.aol.de
      - alicesuchet.aol.de
      - suchet2.aol.de
      - search.hp.my.aol.com.au
      - search.hp.my.aol.de
      - search.hp.my.aol.it
      - search-intl.netscape.com

  Apollo Latvia:
    parameters:
      - q
    domains:
      - apollo.lv/portal/search/

  APOLL07:
    parameters:
      - query
    domains:
      - apollo7.de

  Apontador:
    parameters:
      - q
    domains:
      - apontador.com.br
      - www.apontador.com.br

  Aport:
    parameters:
      - r
    domains:
      - sm.aport.ru

  arama:
    parameters:
      - q
    domains:
      - arama.com

  Arcor:
    parameters:
      - Keywords
    domains:
      - www.arcor.de

  Arianna:
    parameters:
      - query
    domains:
      - arianna.libero.it
      - www.arianna.com

  Ask:
    parameters:
      - q
    domains:
      - ask.com
      - www.ask.com
      - web.ask.com
      - int.ask.com
      - mws.ask.com
      - uk.ask.com
      - images.ask.com
      - ask.reference.com
      - www.askkids.com
      - iwon.ask.com
      - www.ask.co.uk
      - www.qbyrd.com
      - search-results.com
      - uk.search-results.com
      - www.search-results.com
      - int.search-results.com

  Ask Toolbar:
    parameters:
      - searchfor
    domains:
      - search.tb.ask.com

  Atlas:
    parameters:
      - q
    domains:
      - searchatlas.centrum.cz

  Austronaut:
    parameters:
      - q
    domains:
      - www2.austronaut.at
      - www1.astronaut.at

  Babylon:
    parameters:
      - q
    domains:
     - search.babylon.com
     - searchassist.babylon.com

  Baidu:
    parameters:
      - wd
      - word
      - kw
      - k
    domains:
      - www.baidu.com
      - www1.baidu.com
      - zhidao.baidu.com
      - tieba.baidu.com
      - news.baidu.com
      - web.gougou.com
      - m.baidu.com

  Biglobe:
    parameters:
      - q
    domains:
      - cgi.search.biglobe.ne.jp

  Bing:
    parameters:
      - q
      - Q
    domains:
      - bing.com
      - www.bing.com
      - msnbc.msn.com
      - dizionario.it.msn.com
      - cc.bingj.com
      - m.bing.com

  Bing Images:
    parameters:
      - q
      - Q
    domains:
      - bing.com/images/search
      - www.bing.com/images/search

  blekko:
    parameters:
      - q
    domains:
      - blekko.com

  Blogdigger:
    parameters:
      - q
    domains:
      - www.blogdigger.com

  Blogpulse:
    parameters:
      - query
    domains:
      - www.blogpulse.com

  Bluewin:
    parameters:
      - searchTerm
    domains:
      - search.bluewin.ch

  British Telecommunications:
    parameters:
      - p
    domains:
      - search.bt.com

  canoe.ca:
    parameters:
      - q
    domains:
      - web.canoe.ca

  Centrum:
    parameters:
      - q
    domains:
      - serach.centrum.cz
      - morfeo.centrum.cz

  Certified-Toolbar:
    parameters:
      - q
    domains:
      - search.certified-toolbar.com

  Charter:
    parameters:
      - q
    domains:
      - www.charter.net

  Clix:
    parameters:
      - question
    domains:
      - pesquisa.clix.pt

  Conduit:
    parameters:
      - q
    domains:
      - search.conduit.com

  Comcast:
    parameters:
      - q
    domains:
      - serach.comcast.net

  Crawler:
    parameters:
      - q
    domains:
      - www.crawler.com

  Compuserve:
    parameters:
      - query
    domains:
      - websearch.cs.com

  Cuil:
    parameters:
      - q
    domains:
      - www.cuil.com

  Daemon search:
    parameters:
      - q
    domains:
      - daemon-search.com
      - my.daemon-search.com

  Dalesearch:
    parameters:
      - q
    domains:
      - www.dalesearch.com

  DasOertliche:
    parameters:
      - kw
    domains:
      - www.dasoertliche.de

  DasTelefonbuch:
    parameters:
      - kw
    domains:
      - www1.dastelefonbuch.de

  Daum:
    parameters:
      - q
    domains:
      - search.daum.net

  Delfi latvia:
    parameters:
      - q
    domains:
      - smart.delfi.lv

  Delfi:
    parameters:
      - q
    domains:
      - otsing.delfi.ee

  Digg:
    parameters:
      - s
    domains:
      - digg.com

  dmoz:
    parameters:
      - q
    domains:
      - dmoz.org
      - editors.dmoz.org

  Dodo:
    parameters:
      - q
    domains:
      - google.dodo.com.au

  DuckDuckGo:
    parameters:
      - q
    domains:
      - duckduckgo.com

  earthlink:
    parameters:
      - q
    domains:
      - search.earthlink.net

  Ecosia:
    parameters:
      - q
    domains:
      - ecosia.org

  Eniro:
    parameters:
      - q
      - search_word
    domains:
      - www.eniro.se

  Eurip:
    parameters:
      - q
    domains:
      - www.eurip.com

  Euroseek:
    parameters:
      - string
    domains:
      - www.euroseek.com

  Everyclick:
    parameters:
      - keyword
    domains:
      - www.everyclick.com

  Excite:
    parameters:
      - q
      - search
    domains:
      - search.excite.it
      - search.excite.fr
      - search.excite.de
      - search.excite.co.uk
      - serach.excite.es
      - search.excite.nl
      - msxml.excite.com
      - www.excite.co.jp

  Exalead:
    parameters:
      - q
    domains:
      - www.exalead.fr
      - www.exalead.com

  eo:
    parameters:
      - x_query
    domains:
      - eo.st

  Fast Browser Search:
    parameters:
      - q
    domains:
      - www.fastbrowsersearch.com

  Francite:
    parameters:
      - name
    domains:
      - recherche.francite.com

  Finderoo:
    parameters:
      - q
    domains:
      - www.finderoo.com

  Findwide:
    parameters:
      - k
    domains:
      - search.findwide.com

  Fireball:
    parameters:
      - q
    domains:
      - www.fireball.de

  Firstfind:
    parameters:
      - qry
    domains:
      - www.firstsfind.com

  Fixsuche:
    parameters:
      - q
    domains:
      - www.fixsuche.de

  Flix:
    parameters:
      - keyword
    domains:
      - www.flix.de

  Forestle:
    parameters:
      - q
    domains:
      - forestle.org
      - www.forestle.org
      - forestle.mobi

  Free:
    parameters:
      - q
    domains:
      - search.free.fr
      - search1-2.free.fr
      - search1-1.free.fr

  Freecause:
    parameters:
      - p
    domains:
      - search.freecause.com

  Freenet:
    parameters:
      - query
      - Keywords
    domains:
      - suche.freenet.de

  Freshweather:
    parameters:
      - q
    domains:
      - www.fresh-weather.com

  FriendFeed:
    parameters:
      - q
    domains:
      - friendfeed.com

  GAIS:
    parameters:
      - q
    domains:
      - gais.cs.ccu.edu.tw

  Geona:
    parameters:
      - q
    domains:
      - geona.net

  Genieo:
    parameters:
      - q
    domains:
      - search.genieo.com

  Gigablast:
    parameters:
      - q
    domains:
      - www.gigablast.com
      - dir.gigablast.com

  Globososo:
    parameters:
      - q
    domains:
      - searches.globososo.com
      - search.globososo.com

  GMX:
    parameters:
      - su
    domains:
      - suche.gmx.net

  Gnadenmeer:
    parameters:
      - keyword
    domains:
      - www.gnadenmeer.de

  Gomeo:
    parameters:
      - Keywords
    domains:
      - www.gomeo.com

  goo:
    parameters:
      - MT
    domains:
      - search.goo.ne.jp
      - ocnsearch.goo.ne.jp

  Google:
    parameters:
      - q
      - query # For www.cnn.com (powered by Google)
      - Keywords # For gooofullsearch.com (powered by Google)
    domains:
      - www.google.com
      - www.google.ac
      - www.google.ad
      - www.google.com.af
      - www.google.com.ag
      - www.google.com.ai
      - www.google.am
      - www.google.it.ao
      - www.google.com.ar
      - www.google.as
      - www.google.at
      - www.google.com.au
      - www.google.az
      - www.google.ba
      - www.google.com.bd
      - www.google.be
      - www.google.bf
      - www.google.bg
      - www.google.com.bh
      - www.google.bi
      - www.google.bj
      - www.google.com.bn
      - www.google.com.bo
      - www.google.com.br
      - www.google.bs
      - www.google.co.bw
      - www.google.com.by
      - www.google.by
      - www.google.com.bz
      - www.google.ca
      - www.google.com.kh
      - www.google.cc
      - www.google.cd
      - www.google.cf
      - www.google.cat
      - www.google.cg
      - www.google.ch
      - www.google.ci
      - www.google.co.ck
      - www.google.cl
      - www.google.cm
      - www.google.cn
      - www.google.com.co
      - www.google.co.cr
      - www.google.com.cu
      - www.google.cv
      - www.google.com.cy
      - www.google.cz
      - www.google.de
      - www.google.dj
      - www.google.dk
      - www.google.dm
      - www.google.com.do
      - www.google.dz
      - www.google.com.ec
      - www.google.ee
      - www.google.com.eg
      - www.google.es
      - www.google.com.et
      - www.google.fi
      - www.google.com.fj
      - www.google.fm
      - www.google.fr
      - www.google.ga
      - www.google.gd
      - www.google.ge
      - www.google.gf
      - www.google.gg
      - www.google.com.gh
      - www.google.com.gi
      - www.google.gl
      - www.google.gm
      - www.google.gp
      - www.google.gr
      - www.google.com.gt
      - www.google.gy
      - www.google.com.hk
      - www.google.hn
      - www.google.hr
      - www.google.ht
      - www.google.hu
      - www.google.co.id
      - www.google.iq
      - www.google.ie
      - www.google.co.il
      - www.google.im
      - www.google.co.in
      - www.google.io
      - www.google.is
      - www.google.it
      - www.google.je
      - www.google.com.jm
      - www.google.jo
      - www.google.co.jp
      - www.google.co.ke
      - www.google.ki
      - www.google.kg
      - www.google.co.kr
      - www.google.com.kw
      - www.google.kz
      - www.google.la
      - www.google.com.lb
      - www.google.com.lc
      - www.google.li
      - www.google.lk
      - www.google.co.ls
      - www.google.lt
      - www.google.lu
      - www.google.lv
      - www.google.com.ly
      - www.google.co.ma
      - www.google.md
      - www.google.me
      - www.google.mg
      - www.google.mk
      - www.google.ml
      - www.google.mn
      - www.google.ms
      - www.google.com.mt
      - www.google.mu
      - www.google.mv
      - www.google.mw
      - www.google.com.mx
      - www.google.com.my
      - www.google.co.mz
      - www.google.com.na
      - www.google.ne
      - www.google.com.nf
      - www.google.com.ng
      - www.google.com.ni
      - www.google.nl
      - www.google.no
      - www.google.com.np
      - www.google.nr
      - www.google.nu
      - www.google.co.nz
      - www.google.com.om
      - www.google.com.pa
      - www.google.com.pe
      - www.google.com.ph
      - www.google.com.pk
      - www.google.pl
      - www.google.pn
      - www.google.com.pr
      - www.google.ps
      - www.google.pt
      - www.google.com.py
      - www.google.com.qa
      - www.google.ro
      - www.google.rs
      - www.google.ru
      - www.google.rw
      - www.google.com.sa
      - www.google.com.sb
      - www.google.sc
      - www.google.se
      - www.google.com.sg
      - www.google.sh
      - www.google.si
      - www.google.sk
      - www.google.com.sl
      - www.google.sn
      - www.google.sm
      - www.google.so
      - www.google.st
      - www.google.com.sv
      - www.google.td
      - www.google.tg
      - www.google.co.th
      - www.google.com.tj
      - www.google.tk
      - www.google.tl
      - www.google.tm
      - www.google.to
      - www.google.com.tn
      - www.google.tn
      - www.google.com.tr
      - www.google.tt
      - www.google.com.tw
      - www.google.co.tz
      - www.google.com.ua
      - www.google.co.ug
      - www.google.ae
      - www.google.co.uk
      - www.google.us
      - www.google.com.uy
      - www.google.co.uz
      - www.google.com.vc
      - www.google.co.ve
      - www.google.vg
      - www.google.co.vi
      - www.google.com.vn
      - www.google.vu
      - www.google.ws
      - www.google.co.za
      - www.google.co.zm
      - www.google.co.zw
      - google.com
      - google.ac
      - google.ad
      - google.com.af
      - google.com.ag
      - google.com.ai
      - google.am
      - google.it.ao
      - google.com.ar
      - google.as
      - google.at
      - google.com.au
      - google.az
      - google.ba
      - google.com.bd
      - google.be
      - google.bf
      - google.bg
      - google.com.bh
      - google.bi
      - google.bj
      - google.com.bn
      - google.com.bo
      - google.com.br
      - google.bs
      - google.co.bw
      - google.com.by
      - google.by
      - google.com.bz
      - google.ca
      - google.com.kh
      - google.cc
      - google.cd
      - google.cf
      - google.cat
      - google.cg
      - google.ch
      - google.ci
      - google.co.ck
      - google.cl
      - google.cm
      - google.cn
      - google.com.co
      - google.co.cr
      - google.com.cu
      - google.cv
      - google.com.cy
      - google.cz
      - google.de
      - google.dj
      - google.dk
      - google.dm
      - google.com.do
      - google.dz
      - google.com.ec
      - google.ee
      - google.com.eg
      - google.es
      - google.com.et
      - google.fi
      - google.com.fj
      - google.fm
      - google.fr
      - google.ga
      - google.gd
      - google.ge
      - google.gf
      - google.gg
      - google.com.gh
      - google.com.gi
      - google.gl
      - google.gm
      - google.gp
      - google.gr
      - google.com.gt
      - google.gy
      - google.com.hk
      - google.hn
      - google.hr
      - google.ht
      - google.hu
      - google.co.id
      - google.iq
      - google.ie
      - google.co.il
      - google.im
      - google.co.in
      - google.io
      - google.is
      - google.it
      - google.je
      - google.com.jm
      - google.jo
      - google.co.jp
      - google.co.ke
      - google.ki
      - google.kg
      - google.co.kr
      - google.com.kw
      - google.kz
      - google.la
      - google.com.lb
      - google.com.lc
      - google.li
      - google.lk
      - google.co.ls
      - google.lt
      - google.lu
      - google.lv
      - google.com.ly
      - google.co.ma
      - google.md
      - google.me
      - google.mg
      - google.mk
      - google.ml
      - google.mn
      - google.ms
      - google.com.mt
      - google.mu
      - google.mv
      - google.mw
      - google.com.mx
      - google.com.my
      - google.co.mz
      - google.com.na
      - google.ne
      - google.com.nf
      - google.com.ng
      - google.com.ni
      - google.nl
      - google.no
      - google.com.np
      - google.nr
      - google.nu
      - google.co.nz
      - google.com.om
      - google.com.pa
      - google.com.pe
      - google.com.ph
      - google.com.pk
      - google.pl
      - google.pn
      - google.com.pr
      - google.ps
      - google.pt
      - google.com.py
      - google.com.qa
      - google.ro
      - google.rs
      - google.ru
      - google.rw
      - google.com.sa
      - google.com.sb
      - google.sc
      - google.se
      - google.com.sg
      - google.sh
      - google.si
      - google.sk
      - google.com.sl
      - google.sn
      - google.sm
      - google.so
      - google.st
      - google.com.sv
      - google.td
      - google.tg
      - google.co.th
      - google.com.tj
      - google.tk
      - google.tl
      - google.tm
      - google.to
      - google.com.tn
      - google.com.tr
      - google.tt
      - google.com.tw
      - google.co.tz
      - google.com.ua
      - google.co.ug
      - google.ae
      - google.co.uk
      - google.us
      - google.com.uy
      - google.co.uz
      - google.com.vc
      - google.co.ve
      - google.vg
      - google.co.vi
      - google.com.vn
      - google.vu
      - google.ws
      - google.co.za
      - google.co.zm
      - google.co.zw
      - google.tn
      # powered by Google
      - search.avg.com
      - isearch.avg.com
      - www.cnn.com
      - darkoogle.com
      - search.darkoogle.com
      - search.foxtab.com
      - www.gooofullsearch.com
      - search.hiyo.com
      - search.incredimail.com
      - search1.incredimail.com
      - search2.incredimail.com
      - search3.incredimail.com
      - search4.incredimail.com
      - search.incredibar.com
      - search.sweetim.com
      - www.fastweb.it
      - search.juno.com
      - find.tdc.dk
      - searchresults.verizon.com
      - search.walla.co.il
      - search.alot.com
      # Google Earch
      - www.googleearth.de
      - www.googleearth.fr
      # Google Cache
      - webcache.googleusercontent.com
      # Google SSL
      - encrypted.google.com
      # Syndicated search
      - googlesyndicatedsearch.com

  Google Blogsearch:
    parameters:
      - q
    domains:
      - blogsearch.google.ac
      - blogsearch.google.ad
      - blogsearch.google.ae
      - blogsearch.google.am
      - blogsearch.google.as
      - blogsearch.google.at
      - blogsearch.google.az
      - blogsearch.google.ba
      - blogsearch.google.be
      - blogsearch.google.bf
      - blogsearch.google.bg
      - blogsearch.google.bi
      - blogsearch.google.bj
      - blogsearch.google.bs
      - blogsearch.google.by
      - blogsearch.google.ca
      - blogsearch.google.cat
      - blogsearch.google.cc
      - blogsearch.google.cd
      - blogsearch.google.cf
      - blogsearch.google.cg
      - blogsearch.google.ch
      - blogsearch.google.ci
      - blogsearch.google.cl
      - blogsearch.google.cm
      - blogsearch.google.cn
      - blogsearch.google.co.bw
      - blogsearch.google.co.ck
      - blogsearch.google.co.cr
      - blogsearch.google.co.id
      - blogsearch.google.co.il
      - blogsearch.google.co.in
      - blogsearch.google.co.jp
      - blogsearch.google.co.ke
      - blogsearch.google.co.kr
      - blogsearch.google.co.ls
      - blogsearch.google.co.ma
      - blogsearch.google.co.mz
      - blogsearch.google.co.nz
      - blogsearch.google.co.th
      - blogsearch.google.co.tz
      - blogsearch.google.co.ug
      - blogsearch.google.co.uk
      - blogsearch.google.co.uz
      - blogsearch.google.co.ve
      - blogsearch.google.co.vi
      - blogsearch.google.co.za
      - blogsearch.google.co.zm
      - blogsearch.google.co.zw
      - blogsearch.google.com
      - blogsearch.google.com.af
      - blogsearch.google.com.ag
      - blogsearch.google.com.ai
      - blogsearch.google.com.ar
      - blogsearch.google.com.au
      - blogsearch.google.com.bd
      - blogsearch.google.com.bh
      - blogsearch.google.com.bn
      - blogsearch.google.com.bo
      - blogsearch.google.com.br
      - blogsearch.google.com.by
      - blogsearch.google.com.bz
      - blogsearch.google.com.co
      - blogsearch.google.com.cu
      - blogsearch.google.com.cy
      - blogsearch.google.com.do
      - blogsearch.google.com.ec
      - blogsearch.google.com.eg
      - blogsearch.google.com.et
      - blogsearch.google.com.fj
      - blogsearch.google.com.gh
      - blogsearch.google.com.gi
      - blogsearch.google.com.gt
      - blogsearch.google.com.hk
      - blogsearch.google.com.jm
      - blogsearch.google.com.kh
      - blogsearch.google.com.kw
      - blogsearch.google.com.lb
      - blogsearch.google.com.lc
      - blogsearch.google.com.ly
      - blogsearch.google.com.mt
      - blogsearch.google.com.mx
      - blogsearch.google.com.my
      - blogsearch.google.com.na
      - blogsearch.google.com.nf
      - blogsearch.google.com.ng
      - blogsearch.google.com.ni
      - blogsearch.google.com.np
      - blogsearch.google.com.om
      - blogsearch.google.com.pa
      - blogsearch.google.com.pe
      - blogsearch.google.com.ph
      - blogsearch.google.com.pk
      - blogsearch.google.com.pr
      - blogsearch.google.com.py
      - blogsearch.google.com.qa
      - blogsearch.google.com.sa
      - blogsearch.google.com.sb
      - blogsearch.google.com.sg
      - blogsearch.google.com.sl
      - blogsearch.google.com.sv
      - blogsearch.google.com.tj
      - blogsearch.google.com.tn
      - blogsearch.google.com.tr
      - blogsearch.google.com.tw
      - blogsearch.google.com.ua
      - blogsearch.google.com.uy
      - blogsearch.google.com.vc
      - blogsearch.google.com.vn
      - blogsearch.google.cv
      - blogsearch.google.cz
      - blogsearch.google.de
      - blogsearch.google.dj
      - blogsearch.google.dk
      - blogsearch.google.dm
      - blogsearch.google.dz
      - blogsearch.google.ee
      - blogsearch.google.es
      - blogsearch.google.fi
      - blogsearch.google.fm
      - blogsearch.google.fr
      - blogsearch.google.ga
      - blogsearch.google.gd
      - blogsearch.google.ge
      - blogsearch.google.gf
      - blogsearch.google.gg
      - blogsearch.google.gl
      - blogsearch.google.gm
      - blogsearch.google.gp
      - blogsearch.google.gr
      - blogsearch.google.gy
      - blogsearch.google.hn
      - blogsearch.google.hr
      - blogsearch.google.ht
      - blogsearch.google.hu
      - blogsearch.google.ie
      - blogsearch.google.im
      - blogsearch.google.io
      - blogsearch.google.iq
      - blogsearch.google.is
      - blogsearch.google.it
      - blogsearch.google.it.ao
      - blogsearch.google.je
      - blogsearch.google.jo
      - blogsearch.google.kg
      - blogsearch.google.ki
      - blogsearch.google.kz
      - blogsearch.google.la
      - blogsearch.google.li
      - blogsearch.google.lk
      - blogsearch.google.lt
      - blogsearch.google.lu
      - blogsearch.google.lv
      - blogsearch.google.md
      - blogsearch.google.me
      - blogsearch.google.mg
      - blogsearch.google.mk
      - blogsearch.google.ml
      - blogsearch.google.mn
      - blogsearch.google.ms
      - blogsearch.google.mu
      - blogsearch.google.mv
      - blogsearch.google.mw
      - blogsearch.google.ne
      - blogsearch.google.nl
      - blogsearch.google.no
      - blogsearch.google.nr
      - blogsearch.google.nu
      - blogsearch.google.pl
      - blogsearch.google.pn
      - blogsearch.google.ps
      - blogsearch.google.pt
      - blogsearch.google.ro
      - blogsearch.google.rs
      - blogsearch.google.ru
      - blogsearch.google.rw
      - blogsearch.google.sc
      - blogsearch.google.se
      - blogsearch.google.sh
      - blogsearch.google.si
      - blogsearch.google.sk
      - blogsearch.google.sm
      - blogsearch.google.sn
      - blogsearch.google.so
      - blogsearch.google.st
      - blogsearch.google.td
      - blogsearch.google.tg
      - blogsearch.google.tk
      - blogsearch.google.tl
      - blogsearch.google.tm
      - blogsearch.google.to
      - blogsearch.google.tt
      - blogsearch.google.us
      - blogsearch.google.vg
      - blogsearch.google.vu
      - blogsearch.google.ws

  Google Images:
    parameters:
      - q
    domains:
      - google.ac/imgres
      - google.ad/imgres
      - google.ae/imgres
      - google.am/imgres
      - google.as/imgres
      - google.at/imgres
      - google.az/imgres
      - google.ba/imgres
      - google.be/imgres
      - google.bf/imgres
      - google.bg/imgres
      - google.bi/imgres
      - google.bj/imgres
      - google.bs/imgres
      - google.by/imgres
      - google.ca/imgres
      - google.cat/imgres
      - google.cc/imgres
      - google.cd/imgres
      - google.cf/imgres
      - google.cg/imgres
      - google.ch/imgres
      - google.ci/imgres
      - google.cl/imgres
      - google.cm/imgres
      - google.cn/imgres
      - google.co.bw/imgres
      - google.co.ck/imgres
      - google.co.cr/imgres
      - google.co.id/imgres
      - google.co.il/imgres
      - google.co.in/imgres
      - google.co.jp/imgres
      - google.co.ke/imgres
      - google.co.kr/imgres
      - google.co.ls/imgres
      - google.co.ma/imgres
      - google.co.mz/imgres
      - google.co.nz/imgres
      - google.co.th/imgres
      - google.co.tz/imgres
      - google.co.ug/imgres
      - google.co.uk/imgres
      - google.co.uz/imgres
      - google.co.ve/imgres
      - google.co.vi/imgres
      - google.co.za/imgres
      - google.co.zm/imgres
      - google.co.zw/imgres
      - google.com/imgres
      - google.com.af/imgres
      - google.com.ag/imgres
      - google.com.ai/imgres
      - google.com.ar/imgres
      - google.com.au/imgres
      - google.com.bd/imgres
      - google.com.bh/imgres
      - google.com.bn/imgres
      - google.com.bo/imgres
      - google.com.br/imgres
      - google.com.by/imgres
      - google.com.bz/imgres
      - google.com.co/imgres
      - google.com.cu/imgres
      - google.com.cy/imgres
      - google.com.do/imgres
      - google.com.ec/imgres
      - google.com.eg/imgres
      - google.com.et/imgres
      - google.com.fj/imgres
      - google.com.gh/imgres
      - google.com.gi/imgres
      - google.com.gt/imgres
      - google.com.hk/imgres
      - google.com.jm/imgres
      - google.com.kh/imgres
      - google.com.kw/imgres
      - google.com.lb/imgres
      - google.com.lc/imgres
      - google.com.ly/imgres
      - google.com.mt/imgres
      - google.com.mx/imgres
      - google.com.my/imgres
      - google.com.na/imgres
      - google.com.nf/imgres
      - google.com.ng/imgres
      - google.com.ni/imgres
      - google.com.np/imgres
      - google.com.om/imgres
      - google.com.pa/imgres
      - google.com.pe/imgres
      - google.com.ph/imgres
      - google.com.pk/imgres
      - google.com.pr/imgres
      - google.com.py/imgres
      - google.com.qa/imgres
      - google.com.sa/imgres
      - google.com.sb/imgres
      - google.com.sg/imgres
      - google.com.sl/imgres
      - google.com.sv/imgres
      - google.com.tj/imgres
      - google.com.tn/imgres
      - google.com.tr/imgres
      - google.com.tw/imgres
      - google.com.ua/imgres
      - google.com.uy/imgres
      - google.com.vc/imgres
      - google.com.vn/imgres
      - google.cv/imgres
      - google.cz/imgres
      - google.de/imgres
      - google.dj/imgres
      - google.dk/imgres
      - google.dm/imgres
      - google.dz/imgres
      - google.ee/imgres
      - google.es/imgres
      - google.fi/imgres
      - google.fm/imgres
      - google.fr/imgres
      - google.ga/imgres
      - google.gd/imgres
      - google.ge/imgres
      - google.gf/imgres
      - google.gg/imgres
      - google.gl/imgres
      - google.gm/imgres
      - google.gp/imgres
      - google.gr/imgres
      - google.gy/imgres
      - google.hn/imgres
      - google.hr/imgres
      - google.ht/imgres
      - google.hu/imgres
      - google.ie/imgres
      - google.im/imgres
      - google.io/imgres
      - google.iq/imgres
      - google.is/imgres
      - google.it/imgres
      - google.it.ao/imgres
      - google.je/imgres
      - google.jo/imgres
      - google.kg/imgres
      - google.ki/imgres
      - google.kz/imgres
      - google.la/imgres
      - google.li/imgres
      - google.lk/imgres
      - google.lt/imgres
      - google.lu/imgres
      - google.lv/imgres
      - google.md/imgres
      - google.me/imgres
      - google.mg/imgres
      - google.mk/imgres
      - google.ml/imgres
      - google.mn/imgres
      - google.ms/imgres
      - google.mu/imgres
      - google.mv/imgres
      - google.mw/imgres
      - google.ne/imgres
      - google.nl/imgres
      - google.no/imgres
      - google.nr/imgres
      - google.nu/imgres
      - google.pl/imgres
      - google.pn/imgres
      - google.ps/imgres
      - google.pt/imgres
      - google.ro/imgres
      - google.rs/imgres
      - google.ru/imgres
      - google.rw/imgres
      - google.sc/imgres
      - google.se/imgres
      - google.sh/imgres
      - google.si/imgres
      - google.sk/imgres
      - google.sm/imgres
      - google.sn/imgres
      - google.so/imgres
      - google.st/imgres
      - google.td/imgres
      - google.tg/imgres
      - google.tk/imgres
      - google.tl/imgres
      - google.tm/imgres
      - google.to/imgres
      - google.tt/imgres
      - google.us/imgres
      - google.vg/imgres
      - google.vu/imgres
      - images.google.ws
      - images.google.ac
      - images.google.ad
      - images.google.ae
      - images.google.am
      - images.google.as
      - images.google.at
      - images.google.az
      - images.google.ba
      - images.google.be
      - images.google.bf
      - images.google.bg
      - images.google.bi
      - images.google.bj
      - images.google.bs
      - images.google.by
      - images.google.ca
      - images.google.cat
      - images.google.cc
      - images.google.cd
      - images.google.cf
      - images.google.cg
      - images.google.ch
      - images.google.ci
      - images.google.cl
      - images.google.cm
      - images.google.cn
      - images.google.co.bw
      - images.google.co.ck
      - images.google.co.cr
      - images.google.co.id
      - images.google.co.il
      - images.google.co.in
      - images.google.co.jp
      - images.google.co.ke
      - images.google.co.kr
      - images.google.co.ls
      - images.google.co.ma
      - images.google.co.mz
      - images.google.co.nz
      - images.google.co.th
      - images.google.co.tz
      - images.google.co.ug
      - images.google.co.uk
      - images.google.co.uz
      - images.google.co.ve
      - images.google.co.vi
      - images.google.co.za
      - images.google.co.zm
      - images.google.co.zw
      - images.google.com
      - images.google.com.af
      - images.google.com.ag
      - images.google.com.ai
      - images.google.com.ar
      - images.google.com.au
      - images.google.com.bd
      - images.google.com.bh
      - images.google.com.bn
      - images.google.com.bo
      - images.google.com.br
      - images.google.com.by
      - images.google.com.bz
      - images.google.com.co
      - images.google.com.cu
      - images.google.com.cy
      - images.google.com.do
      - images.google.com.ec
      - images.google.com.eg
      - images.google.com.et
      - images.google.com.fj
      - images.google.com.gh
      - images.google.com.gi
      - images.google.com.gt
      - images.google.com.hk
      - images.google.com.jm
      - images.google.com.kh
      - images.google.com.kw
      - images.google.com.lb
      - images.google.com.lc
      - images.google.com.ly
      - images.google.com.mt
      - images.google.com.mx
      - images.google.com.my
      - images.google.com.na
      - images.google.com.nf
      - images.google.com.ng
      - images.google.com.ni
      - images.google.com.np
      - images.google.com.om
      - images.google.com.pa
      - images.google.com.pe
      - images.google.com.ph
      - images.google.com.pk
      - images.google.com.pr
      - images.google.com.py
      - images.google.com.qa
      - images.google.com.sa
      - images.google.com.sb
      - images.google.com.sg
      - images.google.com.sl
      - images.google.com.sv
      - images.google.com.tj
      - images.google.com.tn
      - images.google.com.tr
      - images.google.com.tw
      - images.google.com.ua
      - images.google.com.uy
      - images.google.com.vc
      - images.google.com.vn
      - images.google.cv
      - images.google.cz
      - images.google.de
      - images.google.dj
      - images.google.dk
      - images.google.dm
      - images.google.dz
      - images.google.ee
      - images.google.es
      - images.google.fi
      - images.google.fm
      - images.google.fr
      - images.google.ga
      - images.google.gd
      - images.google.ge
      - images.google.gf
      - images.google.gg
      - images.google.gl
      - images.google.gm
      - images.google.gp
      - images.google.gr
      - images.google.gy
      - images.google.hn
      - images.google.hr
      - images.google.ht
      - images.google.hu
      - images.google.ie
      - images.google.im
      - images.google.io
      - images.google.iq
      - images.google.is
      - images.google.it
      - images.google.it.ao
      - images.google.je
      - images.google.jo
      - images.google.kg
      - images.google.ki
      - images.google.kz
      - images.google.la
      - images.google.li
      - images.google.lk
      - images.google.lt
      - images.google.lu
      - images.google.lv
      - images.google.md
      - images.google.me
      - images.google.mg
      - images.google.mk
      - images.google.ml
      - images.google.mn
      - images.google.ms
      - images.google.mu
      - images.google.mv
      - images.google.mw
      - images.google.ne
      - images.google.nl
      - images.google.no
      - images.google.nr
      - images.google.nu
      - images.google.pl
      - images.google.pn
      - images.google.ps
      - images.google.pt
      - images.google.ro
      - images.google.rs
      - images.google.ru
      - images.google.rw
      - images.google.sc
      - images.google.se
      - images.google.sh
      - images.google.si
      - images.google.sk
      - images.google.sm
      - images.google.sn
      - images.google.so
      - images.google.st
      - images.google.td
      - images.google.tg
      - images.google.tk
      - images.google.tl
      - images.google.tm
      - images.google.to
      - images.google.tt
      - images.google.us
      - images.google.vg
      - images.google.vu

  Google News:
    parameters:
      - q
    domains:
      - news.google.ac
      - news.google.ad
      - news.google.ae
      - news.google.am
      - news.google.as
      - news.google.at
      - news.google.az
      - news.google.ba
      - news.google.be
      - news.google.bf
      - news.google.bg
      - news.google.bi
      - news.google.bj
      - news.google.bs
      - news.google.by
      - news.google.ca
      - news.google.cat
      - news.google.cc
      - news.google.cd
      - news.google.cf
      - news.google.cg
      - news.google.ch
      - news.google.ci
      - news.google.cl
      - news.google.cm
      - news.google.cn
      - news.google.co.bw
      - news.google.co.ck
      - news.google.co.cr
      - news.google.co.id
      - news.google.co.il
      - news.google.co.in
      - news.google.co.jp
      - news.google.co.ke
      - news.google.co.kr
      - news.google.co.ls
      - news.google.co.ma
      - news.google.co.mz
      - news.google.co.nz
      - news.google.co.th
      - news.google.co.tz
      - news.google.co.ug
      - news.google.co.uk
      - news.google.co.uz
      - news.google.co.ve
      - news.google.co.vi
      - news.google.co.za
      - news.google.co.zm
      - news.google.co.zw
      - news.google.com
      - news.google.com.af
      - news.google.com.ag
      - news.google.com.ai
      - news.google.com.ar
      - news.google.com.au
      - news.google.com.bd
      - news.google.com.bh
      - news.google.com.bn
      - news.google.com.bo
      - news.google.com.br
      - news.google.com.by
      - news.google.com.bz
      - news.google.com.co
      - news.google.com.cu
      - news.google.com.cy
      - news.google.com.do
      - news.google.com.ec
      - news.google.com.eg
      - news.google.com.et
      - news.google.com.fj
      - news.google.com.gh
      - news.google.com.gi
      - news.google.com.gt
      - news.google.com.hk
      - news.google.com.jm
      - news.google.com.kh
      - news.google.com.kw
      - news.google.com.lb
      - news.google.com.lc
      - news.google.com.ly
      - news.google.com.mt
      - news.google.com.mx
      - news.google.com.my
      - news.google.com.na
      - news.google.com.nf
      - news.google.com.ng
      - news.google.com.ni
      - news.google.com.np
      - news.google.com.om
      - news.google.com.pa
      - news.google.com.pe
      - news.google.com.ph
      - news.google.com.pk
      - news.google.com.pr
      - news.google.com.py
      - news.google.com.qa
      - news.google.com.sa
      - news.google.com.sb
      - news.google.com.sg
      - news.google.com.sl
      - news.google.com.sv
      - news.google.com.tj
      - news.google.com.tn
      - news.google.com.tr
      - news.google.com.tw
      - news.google.com.ua
      - news.google.com.uy
      - news.google.com.vc
      - news.google.com.vn
      - news.google.cv
      - news.google.cz
      - news.google.de
      - news.google.dj
      - news.google.dk
      - news.google.dm
      - news.google.dz
      - news.google.ee
      - news.google.es
      - news.google.fi
      - news.google.fm
      - news.google.fr
      - news.google.ga
      - news.google.gd
      - news.google.ge
      - news.google.gf
      - news.google.gg
      - news.google.gl
      - news.google.gm
      - news.google.gp
      - news.google.gr
      - news.google.gy
      - news.google.hn
      - news.google.hr
      - news.google.ht
      - news.google.hu
      - news.google.ie
      - news.google.im
      - news.google.io
      - news.google.iq
      - news.google.is
      - news.google.it
      - news.google.it.ao
      - news.google.je
      - news.google.jo
      - news.google.kg
      - news.google.ki
      - news.google.kz
      - news.google.la
      - news.google.li
      - news.google.lk
      - news.google.lt
      - news.google.lu
      - news.google.lv
      - news.google.md
      - news.google.me
      - news.google.mg
      - news.google.mk
      - news.google.ml
      - news.google.mn
      - news.google.ms
      - news.google.mu
      - news.google.mv
      - news.google.mw
      - news.google.ne
      - news.google.nl
      - news.google.no
      - news.google.nr
      - news.google.nu
      - news.google.pl
      - news.google.pn
      - news.google.ps
      - news.google.pt
      - news.google.ro
      - news.google.rs
      - news.google.ru
      - news.google.rw
      - news.google.sc
      - news.google.se
      - news.google.sh
      - news.google.si
      - news.google.sk
      - news.google.sm
      - news.google.sn
      - news.google.so
      - news.google.st
      - news.google.td
      - news.google.tg
      - news.google.tk
      - news.google.tl
      - news.google.tm
      - news.google.to
      - news.google.tt
      - news.google.us
      - news.google.vg
      - news.google.vu
      - news.google.ws

  Google Product Search:
    parameters:
      - q
    domains:
      - google.ac/products
      - google.ad/products
      - google.ae/products
      - google.am/products
      - google.as/products
      - google.at/products
      - google.az/products
      - google.ba/products
      - google.be/products
      - google.bf/products
      - google.bg/products
      - google.bi/products
      - google.bj/products
      - google.bs/products
      - google.by/products
      - google.ca/products
      - google.cat/products
      - google.cc/products
      - google.cd/products
      - google.cf/products
      - google.cg/products
      - google.ch/products
      - google.ci/products
      - google.cl/products
      - google.cm/products
      - google.cn/products
      - google.co.bw/products
      - google.co.ck/products
      - google.co.cr/products
      - google.co.id/products
      - google.co.il/products
      - google.co.in/products
      - google.co.jp/products
      - google.co.ke/products
      - google.co.kr/products
      - google.co.ls/products
      - google.co.ma/products
      - google.co.mz/products
      - google.co.nz/products
      - google.co.th/products
      - google.co.tz/products
      - google.co.ug/products
      - google.co.uk/products
      - google.co.uz/products
      - google.co.ve/products
      - google.co.vi/products
      - google.co.za/products
      - google.co.zm/products
      - google.co.zw/products
      - google.com/products
      - google.com.af/products
      - google.com.ag/products
      - google.com.ai/products
      - google.com.ar/products
      - google.com.au/products
      - google.com.bd/products
      - google.com.bh/products
      - google.com.bn/products
      - google.com.bo/products
      - google.com.br/products
      - google.com.by/products
      - google.com.bz/products
      - google.com.co/products
      - google.com.cu/products
      - google.com.cy/products
      - google.com.do/products
      - google.com.ec/products
      - google.com.eg/products
      - google.com.et/products
      - google.com.fj/products
      - google.com.gh/products
      - google.com.gi/products
      - google.com.gt/products
      - google.com.hk/products
      - google.com.jm/products
      - google.com.kh/products
      - google.com.kw/products
      - google.com.lb/products
      - google.com.lc/products
      - google.com.ly/products
      - google.com.mt/products
      - google.com.mx/products
      - google.com.my/products
      - google.com.na/products
      - google.com.nf/products
      - google.com.ng/products
      - google.com.ni/products
      - google.com.np/products
      - google.com.om/products
      - google.com.pa/products
      - google.com.pe/products
      - google.com.ph/products
      - google.com.pk/products
      - google.com.pr/products
      - google.com.py/products
      - google.com.qa/products
      - google.com.sa/products
      - google.com.sb/products
      - google.com.sg/products
      - google.com.sl/products
      - google.com.sv/products
      - google.com.tj/products
      - google.com.tn/products
      - google.com.tr/products
      - google.com.tw/products
      - google.com.ua/products
      - google.com.uy/products
      - google.com.vc/products
      - google.com.vn/products
      - google.cv/products
      - google.cz/products
      - google.de/products
      - google.dj/products
      - google.dk/products
      - google.dm/products
      - google.dz/products
      - google.ee/products
      - google.es/products
      - google.fi/products
      - google.fm/products
      - google.fr/products
      - google.ga/products
      - google.gd/products
      - google.ge/products
      - google.gf/products
      - google.gg/products
      - google.gl/products
      - google.gm/products
      - google.gp/products
      - google.gr/products
      - google.gy/products
      - google.hn/products
      - google.hr/products
      - google.ht/products
      - google.hu/products
      - google.ie/products
      - google.im/products
      - google.io/products
      - google.iq/products
      - google.is/products
      - google.it/products
      - google.it.ao/products
      - google.je/products
      - google.jo/products
      - google.kg/products
      - google.ki/products
      - google.kz/products
      - google.la/products
      - google.li/products
      - google.lk/products
      - google.lt/products
      - google.lu/products
      - google.lv/products
      - google.md/products
      - google.me/products
      - google.mg/products
      - google.mk/products
      - google.ml/products
      - google.mn/products
      - google.ms/products
      - google.mu/products
      - google.mv/products
      - google.mw/products
      - google.ne/products
      - google.nl/products
      - google.no/products
      - google.nr/products
      - google.nu/products
      - google.pl/products
      - google.pn/products
      - google.ps/products
      - google.pt/products
      - google.ro/products
      - google.rs/products
      - google.ru/products
      - google.rw/products
      - google.sc/products
      - google.se/products
      - google.sh/products
      - google.si/products
      - google.sk/products
      - google.sm/products
      - google.sn/products
      - google.so/products
      - google.st/products
      - google.td/products
      - google.tg/products
      - google.tk/products
      - google.tl/products
      - google.tm/products
      - google.to/products
      - google.tt/products
      - google.us/products
      - google.vg/products
      - google.vu/products
      - google.ws/products
      - www.google.ac/products
      - www.google.ad/products
      - www.google.ae/products
      - www.google.am/products
      - www.google.as/products
      - www.google.at/products
      - www.google.az/products
      - www.google.ba/products
      - www.google.be/products
      - www.google.bf/products
      - www.google.bg/products
      - www.google.bi/products
      - www.google.bj/products
      - www.google.bs/products
      - www.google.by/products
      - www.google.ca/products
      - www.google.cat/products
      - www.google.cc/products
      - www.google.cd/products
      - www.google.cf/products
      - www.google.cg/products
      - www.google.ch/products
      - www.google.ci/products
      - www.google.cl/products
      - www.google.cm/products
      - www.google.cn/products
      - www.google.co.bw/products
      - www.google.co.ck/products
      - www.google.co.cr/products
      - www.google.co.id/products
      - www.google.co.il/products
      - www.google.co.in/products
      - www.google.co.jp/products
      - www.google.co.ke/products
      - www.google.co.kr/products
      - www.google.co.ls/products
      - www.google.co.ma/products
      - www.google.co.mz/products
      - www.google.co.nz/products
      - www.google.co.th/products
      - www.google.co.tz/products
      - www.google.co.ug/products
      - www.google.co.uk/products
      - www.google.co.uz/products
      - www.google.co.ve/products
      - www.google.co.vi/products
      - www.google.co.za/products
      - www.google.co.zm/products
      - www.google.co.zw/products
      - www.google.com/products
      - www.google.com.af/products
      - www.google.com.ag/products
      - www.google.com.ai/products
      - www.google.com.ar/products
      - www.google.com.au/products
      - www.google.com.bd/products
      - www.google.com.bh/products
      - www.google.com.bn/products
      - www.google.com.bo/products
      - www.google.com.br/products
      - www.google.com.by/products
      - www.google.com.bz/products
      - www.google.com.co/products
      - www.google.com.cu/products
      - www.google.com.cy/products
      - www.google.com.do/products
      - www.google.com.ec/products
      - www.google.com.eg/products
      - www.google.com.et/products
      - www.google.com.fj/products
      - www.google.com.gh/products
      - www.google.com.gi/products
      - www.google.com.gt/products
      - www.google.com.hk/products
      - www.google.com.jm/products
      - www.google.com.kh/products
      - www.google.com.kw/products
      - www.google.com.lb/products
      - www.google.com.lc/products
      - www.google.com.ly/products
      - www.google.com.mt/products
      - www.google.com.mx/products
      - www.google.com.my/products
      - www.google.com.na/products
      - www.google.com.nf/products
      - www.google.com.ng/products
      - www.google.com.ni/products
      - www.google.com.np/products
      - www.google.com.om/products
      - www.google.com.pa/products
      - www.google.com.pe/products
      - www.google.com.ph/products
      - www.google.com.pk/products
      - www.google.com.pr/products
      - www.google.com.py/products
      - www.google.com.qa/products
      - www.google.com.sa/products
      - www.google.com.sb/products
      - www.google.com.sg/products
      - www.google.com.sl/products
      - www.google.com.sv/products
      - www.google.com.tj/products
      - www.google.com.tn/products
      - www.google.com.tr/products
      - www.google.com.tw/products
      - www.google.com.ua/products
      - www.google.com.uy/products
      - www.google.com.vc/products
      - www.google.com.vn/products
      - www.google.cv/products
      - www.google.cz/products
      - www.google.de/products
      - www.google.dj/products
      - www.google.dk/products
      - www.google.dm/products
      - www.google.dz/products
      - www.google.ee/products
      - www.google.es/products
      - www.google.fi/products
      - www.google.fm/products
      - www.google.fr/products
      - www.google.ga/products
      - www.google.gd/products
      - www.google.ge/products
      - www.google.gf/products
      - www.google.gg/products
      - www.google.gl/products
      - www.google.gm/products
      - www.google.gp/products
      - www.google.gr/products
      - www.google.gy/products
      - www.google.hn/products
      - www.google.hr/products
      - www.google.ht/products
      - www.google.hu/products
      - www.google.ie/products
      - www.google.im/products
      - www.google.io/products
      - www.google.iq/products
      - www.google.is/products
      - www.google.it/products
      - www.google.it.ao/products
      - www.google.je/products
      - www.google.jo/products
      - www.google.kg/products
      - www.google.ki/products
      - www.google.kz/products
      - www.google.la/products
      - www.google.li/products
      - www.google.lk/products
      - www.google.lt/products
      - www.google.lu/products
      - www.google.lv/products
      - www.google.md/products
      - www.google.me/products
      - www.google.mg/products
      - www.google.mk/products
      - www.google.ml/products
      - www.google.mn/products
      - www.google.ms/products
      - www.google.mu/products
      - www.google.mv/products
      - www.google.mw/products
      - www.google.ne/products
      - www.google.nl/products
      - www.google.no/products
      - www.google.nr/products
      - www.google.nu/products
      - www.google.pl/products
      - www.google.pn/products
      - www.google.ps/products
      - www.google.pt/products
      - www.google.ro/products
      - www.google.rs/products
      - www.google.ru/products
      - www.google.rw/products
      - www.google.sc/products
      - www.google.se/products
      - www.google.sh/products
      - www.google.si/products
      - www.google.sk/products
      - www.google.sm/products
      - www.google.sn/products
      - www.google.so/products
      - www.google.st/products
      - www.google.td/products
      - www.google.tg/products
      - www.google.tk/products
      - www.google.tl/products
      - www.google.tm/products
      - www.google.to/products
      - www.google.tt/products
      - www.google.us/products
      - www.google.vg/products
      - www.google.vu/products
      - www.google.ws/products

  Google Video:
    parameters:
      - q
    domains:
      - video.google.com

  Goyellow.de:
    parameters:
      - MDN
    domains:
      - www.goyellow.de

  Gule Sider:
    parameters:
      - q
    domains:
      - www.gulesider.no

  HighBeam:
    parameters:
      - q
    domains:
      - www.highbeam.com

  Hit-Parade:
    parameters:
      - p7
    domains:
      - req.-hit-parade.com
      - class.hit-parade.com
      - www.hit-parade.com

  Holmes:
    parameters:
      - q
    domains:
      - holmes.ge

  Hooseek.com:
    parameters:
      - recherche
    domains:
      - www.hooseek.com

  Hotbot:
    parameters:
      - query
    domains:
      - www.hotbot.com

  Icerockeet:
    parameters:
      - q
    domains:
      - blogs.icerocket.com

  ICQ:
    parameters:
      - q
    domains:
      - www.icq.com
      - search.icq.com

  Ilse:
    parameters:
      - search_for
    domains:
      - www.ilse.nl

  Inbox.com:
    parameters:
      - q
    domains:
      - inbox.com/search/

  InfoSpace:
    parameters:
      - q
      - s
    domains:
      - infospace.com
      - dogpile.com
      - www.dogpile.com
      - metacrawler.com
      - webfetch.com
      - webcrawler.com
      - search.kiwee.com
      # powered by InfoSpace
      - isearch.babylon.com
      - start.facemoods.com
      - search.magnetic.com
      - search.searchcompletion.com
      - clusty.com

  Flyingbird:
    parameters:
      - q
    domains:
      - inspsearch.com
      - viview.inspsearch.com

  Interia:
    parameters:
      - q
    domains:
      - www.google.interia.pl

  I-play:
    parameters:
      - q
    domains:
      - start.iplay.com

  I.ua:
    parameters:
      - q
    domains:
      - search.i.ua

  IXquick:
    parameters:
      - query
    domains:
      - ixquick.com
      - www.eu.ixquick.com
      - ixquick.de
      - www.ixquick.de
      - us.ixquick.com
      - s1.us.ixquick.com
      - s2.us.ixquick.com
      - s3.us.ixquick.com
      - s4.us.ixquick.com
      - s5.us.ixquick.com
      - eu.ixquick.com
      - s8-eu.ixquick.com
      - s1-eu.ixquick.de

  Jyxo:
    parameters:
      - q
    domains:
      - jyxo.1188.cz

  Jungle Spider:
    parameters:
      - q
    domains:
      - www.jungle-spider.de

  Jungle Key:
    parameters:
      - query
    domains:
      - junglekey.com
      - junglekey.fr

  Kataweb:
    parameters:
      - q
    domains:
      - www.kataweb.it

  Kvasir:
    parameters:
      - q
    domains:
      - www.kvasir.no

  kununu:
    parameters:
      - q
    domains:
      - kununu.com

  Latne:
    parameters:
      - q
    domains:
      - www.latne.lv

  La Toile Du Quebec Via Google:
    parameters:
      - q
    domains:
      - www.toile.com
      - web.toile.com

  Liveinternet:
    parameters:
      - q
    domains:
      - liveinternet.ru

  Looksmart:
    parameters:
      - key
    domains:
      - www.looksmart.com

  Lo.st:
    parameters:
      - x_query
    domains:
      - lo.st

  Lycos:
    parameters:
      - query
    domains:
      - search.lycos.com
      - www.lycos.com
      - lycos.com

  maailm:
    parameters:
      - tekst
    domains:
      - www.maailm.com

  Mail.ru:
    parameters:
      - q
    domains:
      - mail.ru
      - m.mail.ru
      - go.mail.ru

  Mamma:
    parameters:
      - query
    domains:
      - www.mamma.com
      - mamma75.mamma.com

  Marktplaats:
    parameters:
      - query
    domains:
      - www.marktplaats.nl

  Maxwebsearch:
    parameters:
      - query
    domains:
      - maxwebsearch.com

  Meta:
    parameters:
      - q
    domains:
      - meta.ua

  MetaCrawler.de:
    parameters:
      - qry
    domains:
      - s1.metacrawler.de
      - s2.metacrawler.de
      - s3.metacrawler.de

  Metager:
    parameters:
      - eingabe
    domains:
      - meta.rrzn.uni-hannover.de
      - www.metager.de

  Metager2:
    parameters:
      - q
    domains:
      - metager2.de

  Meinestadt:
    parameters:
      - words
    domains:
      - www.meinestadt.de

  Mister Wong:
    parameters:
      - Keywords
    domains:
      - www.mister-wong.com
      - www.mister-wong.de

  Monstercrawler:
    parameters:
      - qry
    domains:
      - www.monstercrawler.com

  Mozbot:
    parameters:
      - q
    domains:
      - www.mozbot.fr
      - www.mozbot.co.uk
      - www.mozbot.com

  El Mundo:
    parameters:
      - q
    domains:
      - ariadna.elmundo.es

  MySearch:
    parameters:
      - searchfor
      - searchFor
    domains:
      - mysearch.com
      - www.mysearch.com
      - ms114.mysearch.com
      - ms146.mysearch.com
      - kf.mysearch.myway.com
      - ki.mysearch.myway.com
      - search.myway.com
      - search.mywebsearch.com

  Najdi:
    parameters:
      - q
    domains:
      - www.najdi.si

  Nate:
    parameters:
      - q
    domains:
      - search.nate.com

  Naver:
    parameters:
      - query
    domains:
      - search.naver.com

  Naver Images:
    parameters:
      - query
    domains:
      - image.search.naver.com
      - imagesearch.naver.com

  Needtofind:
    parameters:
      - searchfor
    domains:
      - ko.search.need2find.com

  Neti:
    parameters:
      - query
    domains:
      - www.neti.ee

  Nifty:
    parameters:
      - q
    domains:
      - search.nifty.com

  Nigma:
    parameters:
      - s
    domains:
      - nigma.ru

  Onet:
    parameters:
      - qt
    domains:
      - szukaj.onet.pl

  Online.no:
    parameters:
      - q
    domains:
      - online.no

  Opplysningen 1881:
    parameters:
      - Query
    domains:
      - www.1881.no

  Orange:
    parameters:
      - q
      - kw
    domains:
      - busca.orange.es
      - search.orange.co.uk
      - lemoteur.orange.fr

  Paperball:
    parameters:
      - q
    domains:
      - www.paperball.de

  PeoplePC:
    parameters:
      - q
    domains:
      - search.peoplepc.com

  Picsearch:
    parameters:
      - q
    domains:
      - www.picsearch.com

  Plazoo:
    parameters:
      - q
    domains:
      - www.plazoo.com

  Poisk.ru:
    parameters:
      - q
    domains:
      - poisk.ru

  PriceRunner:
    parameters:
      - q
    domains:
      - www.pricerunner.co.uk

  qip:
    parameters:
      - query
    domains:
      - search.qip.ru

  Qualigo:
    parameters:
      - q
    domains:
      - www.qualigo.at
      - www.qualigo.ch
      - www.qualigo.de
      - www.qualigo.nl

  Qwant:
    parameters:
      - q
    domains:
      - www.qwant.com
      - lite.qwant.com

  Rakuten:
    parameters:
      - qt
    domains:
      - websearch.rakuten.co.jp

  Rambler:
    parameters:
     - query
     - words
    domains:
      - nova.rambler.ru

  RPMFind:
    parameters:
      - query
    domains:
      - rpmfind.net
      - fr2.rpmfind.net

  Road Runner Search:
    parameters:
      - q
    domains:
      - search.rr.com

  Sapo:
    parameters:
      - q
    domains:
      - pesquisa.sapo.pt

  # Add Scour.com

  Search This:
    parameters:
      - q
    domains:
      - www.searchthis.com

  Search.com:
    parameters:
      - q
    domains:
      - www.search.com

  Search.ch:
    parameters:
      - q
    domains:
      - www.search.ch

  Searchalot:
    parameters:
      - q
    domains:
      - searchalot.com

  SearchCanvas:
    parameters:
      - q
    domains:
      - www.searchcanvas.com

  Searchy:
    parameters:
      - q
    domains:
      - www.searchy.co.uk

  # Add setooz.com

  Seznam:
    parameters:
      - q
    domains:
      - search.seznam.cz

  Sharelook:
    parameters:
      - keyword
    domains:
      - www.sharelook.fr

  Skynet:
    parameters:
      - q
    domains:
      - www.skynet.be

  The Smart Search:
    parameters:
      - q
    domains:
      - thesmartsearch.net
      - www.thesmartsearch.net

  Sogou:
    parameters:
      - query
      - w
    domains:
      - www.sougou.com
      - www.soso.com

  Softonic:
    parameters:
      - q
    domains:
      - search.softonic.com

  SoSoDesk:
    parameters:
      - q
    domains:
      - sosodesktop.com
      - search.sosodesktop.com

  Shenma:
    parameters:
      - q
    domains:
      - so.m.sm.cn
      - yz.m.sm.cn
      - m.sm.cn
      - quark.sm.cn
      - m.sp.sm.cn
      - m.yz2.sm.cn
      - m.yz.sm.cn

  Snapdo:
    parameters:
      - q
    domains:
      - search.snapdo.com

  Startpagina:
    parameters:
      - q
    domains:
      - startgoogle.startpagina.nl

  Startsiden:
    parameters:
      - q
    domains:
      - www.startsiden.no

  suche.info:
    parameters:
      - q
    domains:
      - suche.info

  Suchmaschine.com:
    parameters:
      - suchstr
    domains:
      - www.suchmaschine.com

  Suchnase:
    parameters:
      - q
    domains:
      - www.suchnase.de

  TalkTalk:
    parameters:
      - query
    domains:
      - www.talktalk.co.uk

  Technorati:
    parameters:
      - q
    domains:
      - technorati.com

  Telstra:
    parameters:
      - find
    domains:
      - search.media.telstra.com.au

  Teoma:
    parameters:
      - q
    domains:
      - www.teoma.com

  Terra:
    parameters:
      - query
    domains:
      - buscador.terra.es
      - buscador.terra.cl
      - buscador.terra.com.br

  Tiscali:
    parameters:
      - q
      - key
    domains:
      - search.tiscali.it
      - search-dyn.tiscali.it
      - hledani.tiscali.cz

  Tixuma:
    parameters:
      - sc
    domains:
      - www.tixuma.de

  T-Online:
    parameters:
      - q
    domains:
      - suche.t-online.de
      - brisbane.t-online.de
      - navigationshilfe.t-online.de

  Toolbarhome:
    parameters:
      - q
    domains:
      - www.toolbarhome.com
      - vshare.toolbarhome.com

  Trouvez.com:
    parameters:
      - query
    domains:
      - www.trouvez.com

  TrovaRapido:
    parameters:
      - q
    domains:
      - www.trovarapido.com

  Trusted-Search:
    parameters:
      - w
    domains:
      - www.trusted--search.com

  Tut.by:
    parameters:
      - query
    domains:
      - search.tut.by

  Twingly:
    parameters:
      - q
    domains:
      - www.twingly.com

  UKR.net:
    parameters:
      - q
    domains:
      - search.ukr.net

  uol.com.br:
    parameters:
      - q
    domains:
      - busca.uol.com.br

  URL.ORGanizier:
    parameters:
      - q
    domains:
      - www.url.org

  Vinden:
    parameters:
      - q
    domains:
      - www.vinden.nl

  Vindex:
    parameters:
      - search_for
    domains:
      - www.vindex.nl
      - search.vindex.nl

  Virgilio:
    parameters:
      - qs
    domains:
      - ricerca.virgilio.it
      - ricercaimmagini.virgilio.it
      - ricercavideo.virgilio.it
      - ricercanews.virgilio.it
      - mobile.virgilio.it

  Voila:
    parameters:
      - rdata
      - kw
    domains:
      - search.ke.voila.fr
      - www.lemoteur.fr

  Volny:
    parameters:
      - search
    domains:
      - web.volny.cz

  Walhello :
    parameters:
      - key
    domains:
      - www.walhello.info
      - www.walhello.com
      - www.walhello.de
      - www.walhello.nl

  Web.de:
    parameters:
      - su
    domains:
      - suche.web.de

  Web.nl:
    parameters:
      - zoekwoord
    domains:
      - www.web.nl

  Weborama:
    parameters:
      - QUERY
    domains:
      - www.weborama.com

  WebSearch:
    parameters:
      - qkw
      - q
    domains:
      - www.websearch.com

  Winamp:
    parameters:
      - q
    domains:
      - search.winamp.com

  Witch:
    parameters:
      - search
    domains:
      - www.witch.de

  Wirtualna Polska:
    parameters:
      - szukaj
    domains:
      - szukaj.wp.pl

  WWW:
    parameters:
      - query
    domains:
      - search.www.ee

  X-recherche:
    parameters:
      - MOTS
    domains:
      - www.x-recherche.com

  Yahoo!:
    parameters:
      - p
      - q
    domains:
      - search.yahoo.com
      - yahoo.com
      - ar.search.yahoo.com
      - ar.yahoo.com
      - au.search.yahoo.com
      - au.yahoo.com
      - br.search.yahoo.com
      - br.yahoo.com
      - ca.search.yahoo.com
      - ca.yahoo.com
      - cade.searchde.yahoo.com
      - cade.yahoo.com
      - chinese.searchinese.yahoo.com
      - chinese.yahoo.com
      - cn.search.yahoo.com
      - cn.yahoo.com
      - de.search.yahoo.com
      - de.yahoo.com
      - dk.search.yahoo.com
      - dk.yahoo.com
      - es.search.yahoo.com
      - es.yahoo.com
      - espanol.searchpanol.yahoo.com
      - espanol.yahoo.com
      - fr.search.yahoo.com
      - fr.yahoo.com
      - hk.search.yahoo.com
      - hk.yahoo.com
      - ie.search.yahoo.com
      - ie.yahoo.com
      - in.search.yahoo.com
      - in.yahoo.com
      - it.search.yahoo.com
      - it.yahoo.com
      - kr.search.yahoo.com
      - kr.yahoo.com
      - mx.search.yahoo.com
      - mx.yahoo.com
      - no.search.yahoo.com
      - no.yahoo.com
      - nz.search.yahoo.com
      - nz.yahoo.com
      - one.cn.yahoo.com
      - one.searchn.yahoo.com
      - qc.search.yahoo.com
      - qc.yahoo.com
      - ru.search.yahoo.com
      - ru.yahoo.com
      - se.search.yahoo.com
      - se.yahoo.com
      - search.searcharch.yahoo.com
      - tw.search.yahoo.com
      - tw.yahoo.com
      - uk.search.yahoo.com
      - uk.yahoo.com
      - us.search.yahoo.com
      - us.yahoo.com
      - www.yahoo.co.jp
      - search.yahoo.co.jp
      # powered by Yahoo
      - www.cercato.it
      - search.offerbox.com
      - ys.mirostart.com

  Yahoo! Images:
    parameters:
      - p
      - q
    domains:
      - image.yahoo.cn
      - images.search.yahoo.com

  Yam:
    parameters:
      - k
    domains:
      - search.yam.com

  Yandex:
    parameters:
      - text
    domains:
      - yandex.ru
      - yandex.ua
      - yandex.com
      - yandex.by
      - www.yandex.ru
      - www.yandex.ua
      - www.yandex.com
      - www.yandex.by
      - clck.yandex.ru
      - clck.yandex.ua
      - clck.yandex.com
      - clck.yandex.by

  Yandex Images:
    parameters:
      - text
    domains:
      - images.yandex.ru
      - images.yandex.ua
      - images.yandex.com
      - images.yandex.by

  Yasni:
    parameters:
      - query
    domains:
      - www.yasni.de
      - www.yasni.com
      - www.yasni.co.uk
      - www.yasni.ch
      - www.yasni.at

  Yatedo:
    parameters:
      - q
    domains:
      - www.yatedo.com
      - www.yatedo.fr

  # Add Yellowmap:

  Yippy:
    parameters:
      - q
      - query
    domains:
      - search.yippy.com

  YouGoo:
    parameters:
      - q
    domains:
      - www.yougoo.fr

  Zapmeta:
    parameters:
      - q
      - query
    domains:
      - www.zapmeta.com
      - www.zapmeta.nl
      - www.zapmeta.de
      - uk.zapmeta.com

  Zoek:
    parameters:
      - q
    domains:
      - www3.zoek.nl

  Zhongsou:
    parameters:
      - w
    domains:
      - p.zhongsou.com

  Zoeken:
    parameters:
      - q
    domains:
      - www.zoeken.nl

  Zoohoo:
    parameters:
      - q
    domains:
      - zoohoo.cz



# #######################################################################################################
#
# PAID MEDIA

paid:

  Acuity Ads:
    domains:
      - acuityplatform.com

  Adform:
    domains:
      - adform.net

  ADFOX:
    domains:
      - adfox.ru
      - www.adfox.ru
      - ads.adfox.ru
      - www.ads.adfox.ru

  Adition:
    domains:
      - adition.com

  AdNET:
    domains:
      - adnet.de

  AdRoll:
    domains:
      - adroll.com

  AdSpirit:
    domains:
      - adspirit.de
      - rtbcity.com
      - plusperformance.com

  AppNexus:
    domains:
      - ib.adnxs.com
      - adnxs.com
      - 247realmedia.com

  AudienceScience:
    domains:
      - wunderloop.net

  BidSwitch:
    domains:
      - bidswitch.net

  Casale Media:
    domains:
      - casalemedia.com

  Criteo:
    domains:
      - cas.jp.as.criteo.com
      - cas.criteo.com

  Doubleclick:
    domains:
      - ad.doubleclick.net
      - ad-apac.doubleclick.net
      - s0.2mdn.net
      - s1.2mdn.net
      - dp.g.doubleclick.net
      - pubads.g.doubleclick.net

  Eyeota:
    domains:
      - eyeota.net

  Flashtalking:
    domains:
      - flashtalking.com
      - servedby.flashtalking.com

  Fluct:
    domains:
      - adingo.jp

  Google:
    domains:
      - www.googleadservices.com
      - partner.googleadservices.com
      - googleads.g.doubleclick.net
      - tpc.googlesyndication.com
      - googleadservices.com
      - imasdk.googleapis.com

  LifeStreet:
    domains:
      - lfstmedia.com

  LowerMyBills:
    parameters:
      - leadid
    domains:
      - lowermybills.com

  Jivox:
    domains:
      - jivox.com

  MicroAd:
    domains:
      - microad.jp

  Mixpo:
    domains:
      - mixpo.com

  Mozo:
    domains:
      - mozo.com.au
      - a.mozo.com.au

  Neustar AdAdvisor:
    domains:
      - adadvisor.net

  ONE by AOL:
    domains:
      - nexage.com

  OpenX:
    domains:
      - us-ads.openx.net
      - openx.net
      - servedbyopenx.com
      - openxenterprise.com

  Outbrain:
    domains:
      - paid.outbrain.com

  Plista:
    domains:
      - farm.plista.com

  Price.ru:
    domains:
      - price.ru
      - v.price.ru

  PubMatic:
    domains:
      - sshowads.pubmatic.com

  Rubicon Project:
    domains:
      - optimized-by.rubiconproject.com

  Sizmek:
    domains:
      - bs.serving-sys.com

  Sociomantic Labs:
    domains:
      - sociomantic.com

  Sonobi:
    domains:
      - sonobi.com

  Sovrn:
    domains:
      - lijit.com

  SteelHouse:
    domains:
      - steelhousemedia.com

  StickyADS.tv:
    domains:
      - stickyadstv.com
      - sfx.stickyadstv.com

  Taboola:
    domains:
      - trc.taboola.com
      - api.taboola.com
      - taboola.com

  Torg.Mail.ru:
    domains:
      - torg.mail.ru

  Tribal Fusion:
    domains:
      - cdnx.tribalfusion.com

  White Pages:
    domains:
      - www.whitepages.com.au
      - mobile.whitepages.com.au

  Yandex.Direct:
    domains:
      - an.yandex.ru
      - yabs.yandex.ru
      - yabs.yandex.ua
      - yabs.yandex.com
      - yabs.yandex.by

  Yandex.Market:
    domains:
      - market.yandex.ru
      - m.market.yandex.ru

  Yieldmo:
    domains:
      - yieldmo.com

  ZEDO:
    domains:
      - zedo.com
      - z1.zedo.com
`

import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import {TabBar} from 'antd-mobile';
import {Home} from 'COMPONENT';

import less from './Dashboard.less';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'xiaoya',
      hidden: false,
      oneStepMarketing: [
        {
          title: '会员数量过少',
          info: '当前会员数181人，落后99.0%的同行',
          activities: 7,
        },
        {
          title: '回头客较少',
          info: '近60天50%会员没有回头消费，落后99%的同行',
          activities: 5,
        },
        {
          title: '会员流失严重',
          info: '近180天56%会员没有到店消费，落后99%的同行',
          activities: 1,
        },
      ],
      myOperationalData: [
        {
          thumb: 'assets/img/icon01.png',
          title: '今日新增人数(人)',
          titleData: 0,
          desc: '总会员',
          descData: 181,
          extraDesc: '交易二次以上的会员',
          extraDescData: '66(36.46%)',
        },
        {
          thumb: 'assets/img/icon02.png',
          title: '今日消费额(元)',
          titleData: 0,
          desc: '总消费额',
          descData: 9955,
          extraDesc: '近30天笔单价',
          extraDescData: '7',
        },
        {
          thumb: 'assets/img/icon03.png',
          title: '过去7天营销收益(元)',
          titleData: 0,
          desc: '过去7天发券量',
          descData: 0,
          extraDesc: '过去7天核销券量',
          extraDescData: '0',
        },
      ],
      bestActivities: [
        {
          title: '新店包',
          info: '新店营销，快人一步！',
          poster: 'assets/img/poster01.png',
          data1: '1500次',
          desc1: '累计使用',
          data2: '5.12万',
          desc2: '平均收益',
          isNew: true,
        },
        {
          title: '新店包',
          info: '新店营销，快人一步！',
          poster: 'assets/img/poster01.png',
          data1: '1500次',
          desc1: '累计使用',
          data2: '5.12万',
          desc2: '平均收益',
          isNew: true,
        },
        {
          title: '新店包',
          info: '新店营销，快人一步！',
          poster: 'assets/img/poster01.png',
          data1: '1500次',
          desc1: '累计使用',
          data2: '5.12万',
          desc2: '平均收益',
          isNew: true,
        },
        {
          title: '新店包',
          info: '新店营销，快人一步！',
          poster: 'assets/img/poster01.png',
          data1: '1500次',
          desc1: '累计使用',
          data2: '5.12万',
          desc2: '平均收益',
          isNew: true,
        },
        {
          title: '新店包',
          info: '新店营销，快人一步！',
          poster: 'assets/img/poster01.png',
          data1: '1500次',
          desc1: '累计使用',
          data2: '5.12万',
          desc2: '平均收益',
          isNew: true,
        },
        {
          title: '新店包',
          info: '新店营销，快人一步！',
          poster: 'assets/img/poster01.png',
          data1: '1500次',
          desc1: '累计使用',
          data2: '5.12万',
          desc2: '平均收益',
          isNew: true,
        },
      ],
    };
  }

  componentDidMount() {
    console.log('========== Dashboard');
  }

  renderContent(pageText) {
    return (
      <div style={{backgroundColor: 'white', height: '100%', textAlign: 'center'}}>
        <div style={{paddingTop: 60}}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
        <a
          style={{display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9'}}
          onClick={e => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          点击切换 tab-bar 显示/隐藏
        </a>
      </div>
    );
  }

  render() {
    const {hidden, selectedTab, oneStepMarketing, myOperationalData, bestActivities} = this.state;
    

    return (
      <div className={less.Dashboard}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={hidden}
        >
          {/* 小雅页面 */}
          <TabBar.Item
            title="小雅"
            key="小雅"
            icon={<div style={{
              width: '0.5rem',
              height: '0.5rem',
              backgroundImage: 'url(assets/img/navbar01.png)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'}}
            />}
            selectedIcon={<div style={{
              width: '0.5rem',
              height: '0.5rem',
              backgroundImage: 'url(assets/img/navbar01_active.png)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'}}
            />}
            selected={selectedTab === 'xiaoya'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'xiaoya',
              });
            }}
            data-seed="logId"
          >
            <Home
              oneStepMarketing={oneStepMarketing}
              myOperationalData={myOperationalData}
              bestActivities={bestActivities}
            />
          </TabBar.Item>

          
          {/* 营销页面 */}
          <TabBar.Item
            icon={<div style={{
              width: '0.5rem',
              height: '0.5rem',
              backgroundImage: 'url(assets/img/navbar02.png)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'}}
            />}
            selectedIcon={<div style={{
              width: '0.5rem',
              height: '0.5rem',
              backgroundImage: 'url(assets/img/navbar02_active.png)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'}}
            />}
            title="营销"
            key="营销"
            badge={'new'}
            selected={selectedTab === 'marketing'}
            onPress={() => {
              this.setState({
                selectedTab: 'marketing',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent('营销')}
          </TabBar.Item>

          {/* 活动页面 */}
          <TabBar.Item
            icon={
              <div style={{
                width: '0.5rem',
                height: '0.5rem',
                backgroundImage: 'url(assets/img/navbar03.png)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'}}
              />}
            selectedIcon={
              <div style={{
                width: '0.5rem',
                height: '0.5rem',
                backgroundImage: 'url(assets/img/navbar03_active.png)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'}}
              />}
            title="活动"
            key="活动"
            dot
            selected={selectedTab === 'activities'}
            onPress={() => {
              this.setState({
                selectedTab: 'activities',
              });
            }}
          >
            {this.renderContent('活动')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

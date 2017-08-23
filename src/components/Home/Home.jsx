import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {WhiteSpace, Button, Modal, WingBlank, Card} from 'antd-mobile';

import less from './Home.less';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inviteVisible: false,
    };
    this.onClose = this.onClose.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  onClose() {
    this.setState({
      inviteVisible: false,
    });
  }

  showModal(e) {
    // 现象：如果弹出的弹框上的 x 按钮的位置、和手指点击 button 时所在的位置「重叠」起来，
    // 会触发 x 按钮的点击事件而导致关闭弹框 (注：弹框上的取消/确定等按钮遇到同样情况也会如此)
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      inviteVisible: true,
    });
  }

  render() {
    const {inviteVisible} = this.state;
    // bestActivities
    const {oneStepMarketing, myOperationalData} = this.props;
    const oneStepCards = oneStepMarketing.map((card, i) => (
      // className={less[`card${i}`]}
      <div
        key={i.toString()}
      >
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            title={card.title}
          />
          <Card.Body>
            <div>{card.info}</div>
            <WhiteSpace size="xl" />
            <Button className={less['cards-btn']} type="primary">
              已创建{card.activities}个活动，继续创建
            </Button>
            <WhiteSpace size="xl" />
          </Card.Body>
        </Card>
      </div>
    ));

    const myOperationalCards = myOperationalData.map((card, i) => (
      // className={less[`card${i}`]}
      <div
        key={i.toString()}
      >
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            title={card.title}
            thumb={require(`../../${card.thumb}`)} // eslint-disable-line
            extra={<div>
              <p className={less['extra-desc']}>{card.desc}</p>
              <p className={less['extra-text']}>{card.descData}</p>
            </div>}
          />
          <Card.Body>
            <div className={less['body-left']}>{card.titleData}</div>
            <div className={less['body-right']}>
              <p className={less['extra-desc']}>{card.extraDesc}</p>
              <p className={less['extra-text']}>{card.extraDescData}</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    ));

    // const bestActivityCards = bestActivities.map((card, i) => (
    //   // className={less[`card${i}`]}
    //   <div
    //     key={i.toString()}
    //   >
    //     <WhiteSpace size="lg" />
    //     <Card>
    //       <Card.Header
    //         title={card.title}
    //       />
    //       <Card.Body>
    //         <div>{card.info}</div>
    //         <WhiteSpace size="xl" />
    //         <Button className={less['cards-btn']} type="primary">
    //           已创建{card.activities}个活动，继续创建
    //         </Button>
    //         <WhiteSpace size="xl" />
    //       </Card.Body>
    //     </Card>
    //   </div>
    // ));


    return (
      <div className={less.Home}>
        <div className={less['tab-content-xiaoya']}>
          {/* ========================== */}
          {/* ====  吱口令 小雅PLUS  ===== */}
          {/* ========================== */}
          <WhiteSpace />
          <div className={less.featurebar}>
            <Button onClick={this.showModal} size="small" inline>吱口令入群</Button>
            <Button size="small" inline>小雅PLUS</Button>
          </div>
          <Modal
            title="邀请你加入群聊"
            transparent
            closable
            maskClosable={false}
            visible={inviteVisible}
            onClose={this.onClose}
          >
            <p className={less['modal-desc']}>说明：复制吱口令后，打开支付宝自动识别然后邀请你加入群聊即可</p>
            <p className={less['modal-content']}>#吱口令#长按复制此条消息，打开支付宝即可加入群聊7xXejD16Jg该吱口令将在2017年08月18日失效</p>
          </Modal>

          {/* ==================== */}
          {/* ====  一键营销  ===== */}
          {/* ==================== */}
          <WingBlank
            size="lg"
            className={less['one-step-marketing']}
          >
            <WhiteSpace size="lg" />
            <p className={less['cards-desc']}>一键营销</p>
            {oneStepCards}
          </WingBlank>

          {/* ==================== */}
          {/* ==== 我的运营数据 ==== */}
          {/* ==================== */}
          <WingBlank
            size="lg"
            className={less['my-operational-data']}
          >
            <WhiteSpace size="lg" />
            <p className={less['cards-desc']}>我的运营数据</p>
            {myOperationalCards}
          </WingBlank>

          {/* ========================= */}
          {/* ==== 效果最好的营销活动 ==== */}
          {/* ========================= */}
          <WingBlank
            size="lg"
            className={less['best-activities']}
          >
            <WhiteSpace size="lg" />
            <p className={less['cards-desc']}>效果最好的营销活动</p>
            <WhiteSpace size="lg" />

            <div className={less['activity-cards-wrapper']}>
              <div className={less['activity-cards-row']}>
                <Card className={classNames(less['activity-card'], {active: true})}>
                  <Card.Header
                    title="新店包"
                    extra={<span>新店营销，快人一步！</span>}
                  />
                  <Card.Body>
                    <div className={less.poster}>
                      <img src="../../assets/img/poster01.png" alt="" />
                    </div>
                    <div className={less.detail}>
                      <div className={less.left}>
                        <p className={less.data}>1500次</p>
                        <p className={less.desc}>累计使用</p>
                      </div>
                      <div className={less.right}>
                        <p className={less.data}>5.12万</p>
                        <p className={less.desc}>平均收益</p>
                      </div>
                    </div>
                    <Button className={less.btn} type="primary">立即使用</Button>
                  </Card.Body>
                </Card>

                <Card className={less['activity-card']}>
                  <Card.Header
                    title="This is title"
                    extra={<span>this is extra</span>}
                  />
                  <Card.Body>
                    <div className={less.poster}>
                      <img src="../../assets/img/poster01.png" alt="" />
                    </div>
                  </Card.Body>
                  <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
              </div>
              <WhiteSpace size="lg" />
            </div>
          </WingBlank>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  oneStepMarketing: PropTypes.func.isRequired,
  myOperationalData: PropTypes.func.isRequired,
  // bestActivities: PropTypes.func.isRequired,
};

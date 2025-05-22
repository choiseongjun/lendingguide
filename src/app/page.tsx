import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* 히어로 섹션 */}
      <section className="hero-section">
        <div className="container text-center hero-content">
          <h1 className="display-4 mb-4">
            당신의 일상이 누군가에겐 여행이 됩니다
          </h1>
          <p className="lead mb-4">
            동네를 여행지로 만드는 새로운 방법
            <br />
            지금, 트립윗미 가이드로 시작해보세요
          </p>
          <button className="cta-button">가이드 등록하기</button>
        </div>
      </section>

      {/* 섹션 1: 왜 트립윗미인가? */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">
            누구나, 자격 없이 시작하는 로컬 여행 가이드
          </h2>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="feature-card h-100">
                <h4 className="mb-4">자격증 필요 없음</h4>
                <p className="mb-3">동네 산책, 시장 투어, 맛집 코스 모두 OK</p>
                <p>내가 만든 코스로 수익 창출까지!</p>
                <div className="mt-4">
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="guide-image-wrapper">
                        <Image
                          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3"
                          className="guide-image"
                          alt="카페 투어"
                          width={300}
                          height={200}
                        />
                        <span className="guide-image-caption">카페 투어</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="guide-image-wrapper">
                        <Image
                          src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3"
                          className="guide-image"
                          alt="시장 투어"
                          width={300}
                          height={200}
                        />
                        <span className="guide-image-caption">시장 투어</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="guide-image-wrapper large">
                    <Image
                      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3"
                      className="guide-image"
                      alt="맛집 투어"
                      width={400}
                      height={300}
                    />
                    <span className="guide-image-caption">맛집 투어</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="guide-image-wrapper">
                    <Image
                      src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3"
                      className="guide-image"
                      alt="빈티지 쇼핑"
                      width={300}
                      height={200}
                    />
                    <span className="guide-image-caption">빈티지 쇼핑</span>
                  </div>
                  <div className="guide-image-wrapper mt-4">
                    <Image
                      src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3"
                      className="guide-image"
                      alt="문화 투어"
                      width={300}
                      height={200}
                    />
                    <span className="guide-image-caption">문화 투어</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 섹션 2: 가이드가 되면 좋은 점 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">가이드가 되면 좋은 점</h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="feature-card">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="benefit-content">
                      <h4 className="mb-4">
                        💡 나만의 일상을 콘텐츠로 바꾸는 가장 쉬운 방법
                      </h4>
                      <ul className="feature-list list-unstyled">
                        <li>
                          <div className="benefit-item">
                            <div className="benefit-icon">💰</div>
                            <div className="benefit-text">
                              <strong>내가 설정한 코스, 내가 정한 요금</strong>
                              <p>원하는 만큼 수익 창출 가능</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="benefit-item">
                            <div className="benefit-icon">👥</div>
                            <div className="benefit-text">
                              <strong>한 명만 참여해도 운영 가능</strong>
                              <p>소규모로 시작해도 OK</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="benefit-item">
                            <div className="benefit-icon">📱</div>
                            <div className="benefit-text">
                              <strong>플랫폼이 예약 관리 및 결제 지원</strong>
                              <p>복잡한 업무는 우리가 처리</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="benefit-item">
                            <div className="benefit-icon">📈</div>
                            <div className="benefit-text">
                              <strong>내가 호스팅한 만큼 수익이 쌓인다!</strong>
                              <p>투자한 시간만큼 보상받기</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <p className="mt-4 time-investment">
                        ⏱ 하루 1시간, 주말 2시간만 투자해도 충분해요
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="benefit-image-wrapper">
                      <Image
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3"
                        className="benefit-image"
                        alt="가이드 활동"
                        width={600}
                        height={400}
                      />
                      <div className="benefit-stats">
                        <div className="stat-item">
                          <span className="stat-number">98%</span>
                          <span className="stat-label">만족도</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-number">5,000+</span>
                          <span className="stat-label">활동 가이드</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-number">10만+</span>
                          <span className="stat-label">참여자</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 섹션 3: 실제 후기 */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">👥 이런 후기들이 쌓이고 있어요!</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="review-card">
                <p>"단순한 동네 산책이 이렇게 재밌을 줄이야!"</p>
                <div className="d-flex align-items-center mt-4">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
                    className="reviewer-image"
                    alt="참여자"
                    width={60}
                    height={60}
                  />
                  <span className="ms-3">익명의 참여자</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="review-card">
                <p>"혼자 사는 동네가 여행지처럼 느껴졌어요"</p>
                <div className="d-flex align-items-center mt-4">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
                    className="reviewer-image"
                    alt="참여자"
                    width={60}
                    height={60}
                  />
                  <span className="ms-3">익명의 참여자</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="review-card">
                <p>"가이드님 덕분에 힐링됐어요. 다음에도 또 하고 싶어요!"</p>
                <div className="d-flex align-items-center mt-4">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3"
                    className="reviewer-image"
                    alt="참여자"
                    width={60}
                    height={60}
                  />
                  <span className="ms-3">익명의 참여자</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 섹션 4: 등록 방법 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">🎯 지금 바로 가이드가 되어보세요</h2>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="step-card">
                <div className="step-number">1</div>
                <h5>가이드 등록하기</h5>
                <p>클릭 한 번으로 시작</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="step-card">
                <div className="step-number">2</div>
                <h5>내 동네 코스 작성</h5>
                <p>사진과 설명 추가</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="step-card">
                <div className="step-number">3</div>
                <h5>운영 시간 설정</h5>
                <p>가능한 요일과 시간 선택</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="step-card">
                <div className="step-number">4</div>
                <h5>모집 시작</h5>
                <p>바로 모집 시작!</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <p className="mb-4">
              🔒 플랫폼에서 예약·결제·정산까지 자동 처리
              <br />
              🛟 별도 보험이나 허가 없이 시작 가능
            </p>
            <button className="cta-button">지금 시작하기</button>
          </div>
        </div>
      </section>
    </main>
  );
}

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
          <div className="row">
            <div className="col-md-6">
              <div className="feature-card">
                <h4 className="mb-4">자격증 필요 없음</h4>
                <p className="mb-3">동네 산책, 시장 투어, 맛집 코스 모두 OK</p>
                <p>내가 만든 코스로 수익 창출까지!</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-6">
                  <Image
                    src="https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-4.0.3"
                    className="course-image"
                    alt="망원시장 데이트 코스"
                    width={300}
                    height={250}
                  />
                  <p className="text-center">망원시장 데이트 코스</p>
                </div>
                <div className="col-6">
                  <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3"
                    className="course-image"
                    alt="홍대 빈티지+디저트 탐방"
                    width={300}
                    height={250}
                  />
                  <p className="text-center">홍대 빈티지+디저트 탐방</p>
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
            <div className="col-md-8">
              <div className="feature-card">
                <h4 className="mb-4">
                  💡 나만의 일상을 콘텐츠로 바꾸는 가장 쉬운 방법
                </h4>
                <ul className="feature-list list-unstyled">
                  <li>내가 설정한 코스, 내가 정한 요금</li>
                  <li>한 명만 참여해도 운영 가능</li>
                  <li>플랫폼이 예약 관리 및 결제 지원</li>
                  <li>내가 호스팅한 만큼 수익이 쌓인다!</li>
                </ul>
                <p className="mt-4">
                  ⏱ 하루 1시간, 주말 2시간만 투자해도 충분해요
                </p>
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

import React from "react";
import {
  FaBuilding,
  FaClock,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h4 className="text-white mb-4 fw-semibold">회사 정보</h4>
          <ul className="list-unstyled">
            <li className="mb-2">회사명: 트윗</li>
            <li className="mb-2">대표이사: 최성준</li>
            <li className="mb-2">사업자등록번호: 880-05-02957</li>
            <li className="mb-2">주소: 서울시 동작구 상도동 211-114 201호</li>
            <li className="mb-2">이메일: tripcsj2702@gmail.com</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h4 className="text-white mb-4 fw-semibold">고객센터 정보</h4>
          <ul className="list-unstyled">
            <li className="mb-2">
              <span className="text-secondary">운영시간:</span> 평일 10:00 - 18:00
            </li>
            <li className="mb-2">
              <span className="text-secondary">점심시간:</span> 12:00 - 13:00
            </li>
            <li className="mb-2">
              <span className="text-secondary">휴무일:</span> 주말 및 공휴일
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 text-center border-top border-secondary pt-4 mt-4">
          <p className="text-secondary mb-0">© 2025 트윗. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;

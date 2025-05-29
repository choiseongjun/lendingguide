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
    <footer className="bg-black text-white py-12 relative bottom-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start max-w-4xl mx-auto">
          {/* 회사 정보 */}
          <div className="w-1/2 pr-12">
            <h3 className="text-xl font-bold text-blue-400 mb-8">회사 정보</h3>
            <ul className="space-y-6">
              <li>
                <span className="text-gray-400">회사명</span>
                <p className="text-white mt-1">트윗</p>
              </li>
              <li>
                <span className="text-gray-400">대표이사</span>
                <p className="text-white mt-1">최성준</p>
              </li>
              <li>
                <span className="text-gray-400">사업자등록번호</span>
                <p className="text-white mt-1">880-05-02957</p>
              </li>
              <li>
                <span className="text-gray-400">주소</span>
                <p className="text-white mt-1">
                  서울시 동작구 상도동 211-114 201호
                </p>
              </li>
              <li>
                <span className="text-gray-400">이메일</span>
                <p className="text-white mt-1">tripcsj2702@gmail.com</p>
              </li>
            </ul>
          </div>

          {/* 고객센터 정보 */}
          <div className="w-1/2 pl-12">
            <h3 className="text-xl font-bold text-blue-400 mb-8">고객센터</h3>
            <ul className="space-y-6">
              <li>
                <span className="text-gray-400">운영시간</span>
                <p className="text-white mt-1">평일 10:00 - 18:00</p>
              </li>
              <li>
                <span className="text-gray-400">점심시간</span>
                <p className="text-white mt-1">12:00 - 13:00</p>
              </li>
              <li>
                <span className="text-gray-400">휴무일</span>
                <p className="text-white mt-1">주말 및 공휴일</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} 트윗. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

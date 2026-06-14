"use client";

import { useState, type ReactNode } from "react";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: "500",
});

function CaseSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="case-detail__section">
      <h2 className="case-detail__section-title">{title}</h2>
      <div className="case-detail__body">{children}</div>
    </section>
  );
}

function CaseHeroCover({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  return (
    <div className="case-detail__hero-cover">
      <div className="case-detail__image-frame case-detail__image-frame--hero">
        {showPlaceholder ? (
          <div className="case-detail__placeholder" aria-hidden="true" />
        ) : (
          <img
            src={src}
            alt={alt}
            className="case-detail__image"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}

function CaseFigure({
  src,
  alt = "",
}: {
  src?: string;
  alt?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  return (
    <figure className="case-detail__figure">
      <div className="case-detail__image-frame">
        {showPlaceholder ? (
          <div className="case-detail__placeholder" aria-hidden="true" />
        ) : (
          <img
            src={src}
            alt={alt}
            className="case-detail__image"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </figure>
  );
}

function CaseParagraph({ children }: { children: ReactNode }) {
  return <p className="case-detail__paragraph">{children}</p>;
}

function CaseNoteParagraph({ children }: { children: string }) {
  const text = children.trim().replace(/^\*+|\*+$/g, "");

  return <p className="case-detail__note-paragraph">{text}</p>;
}

export default function RocketCrashCase() {
  return (
    <article className="case-detail case-detail--rocket-crash">
      <header className="case-detail__intro">
        <h1 className={`case-detail__title ${unbounded.className}`}>
          Rocket Crash
        </h1>
        <p className="case-detail__intro-description">
          Мобильная crash-игра с игровым сценарием, ставками, депозитами,
          выводом средств, личным кабинетом и партнерской программой.
        </p>
      </header>

      <CaseHeroCover src="/cases/rocket-crash/cover.png" alt="Rocket Crash" />

      <div className="case-detail__section">
        <div className="case-detail__body">
          <CaseNoteParagraph>*немного о продукте*</CaseNoteParagraph>
          <CaseParagraph>
            Одна из первых игр во фрейме Telegram, которую видел рынок. Работает
            через бота, охват аудитории более 30 000 человек ежемесячно и 2 000
            онлайн каждый день. Общий вид, механика работы, внутренние функции —
            были проверены и внедрены мной. Анализ и тесты юзабилити были
            проделаны нашей командой и пользователями на первой MVP
          </CaseParagraph>
        </div>
      </div>

      <CaseSection title="Описание задачи">
        <CaseParagraph>
          Разработать визуально привлекательный продукт, добавив в него свежие
          функции, которых не хватает на продуктах подобного жанра. Сделать
          полностью самостоятельным, продумав логику работы аккаунта, и в
          перспективе выхода на браузерные платформы с возможностью мерджа
          аккаунтов (соединение двух аккаунтов в единый)
        </CaseParagraph>
      </CaseSection>

      <CaseSection title="Подход к задаче и анализ конкурентов">
        <CaseParagraph>
          Чтобы понять, как работает игра, я просмотрел несколько конкурентов,
          ознакомился с механиками и несколько раз пополнил баланс некоторых
          платформ, чтобы понять чего не хватает игроку, и на какие вещи вещи
          нужно обратить особое внимание. Для визуального вдохновения
          воспользовался творческими платформами, где были концепты других игр,
          созданных в Figma. На основе собранной информации приступил к сборке
          концептов и проработки новых механик, которых не хватает на мой
          взгляд. Все концепты и наработки показать не могу, согласно NDA.
          Показываю только то, что стоит сейчас на проде и к чему есть доступ у
          всего комьюнити
        </CaseParagraph>
      </CaseSection>

      <CaseSection title="Недостающие функции среди конкурентов">
        <ul className="case-detail__results-list">
          <li>Отсутствие личного кабинета</li>
          <li>Отсутствие мульти-баланса</li>
          <li>Возможность просмотра личной статистики</li>
          <li>Реферальные функции</li>
          <li>Бонусная программа</li>
          <li>
            Отсутствие индивидуальной настройки ставки и увеличение ее количества
          </li>
          <li>Возможность привязать WEB3 Wallet</li>
          <li>
            У некоторых проектов нет демо-счета, его нужно добавить
          </li>
        </ul>
      </CaseSection>

      <CaseSection title="Главный экран">
        <CaseParagraph>
          После загрузки, первое что видит пользователь — главный экран, на
          котором уже идет игра. На данном разделе есть ряд функций, например как
          добавление дополнительной карточки, убрать отображение ставок других
          игроков и индивидуально настройку каждой ставки. Одна из механик,
          которую я отобразил — скейл экрана без потери информативного контента
        </CaseParagraph>

        <CaseFigure src="/cases/rocket-crash/primary.png" />
      </CaseSection>

      <CaseSection title="Флоу ставки">
        <CaseParagraph>
          После нажатия на “Bet”, происходит загрузка и ожидание завершения уже
          запущенной игровой сессии (игра кончается тогда, когда ракета улетает,
          в среднем 10-20 секунд), после чего ставку можно будет отменить и
          средства вернутся на баланc
        </CaseParagraph>

        <CaseFigure src="/cases/rocket-crash/bet.png" />
      </CaseSection>

      <CaseSection title="Личный кабинет">
        <CaseParagraph>
          Как я описал выше, у большинства конкурентов не было личного кабинета.
          Я посчитал, что в данной сфере это важный атрибут, пользователь всегда
          должен быть в курсе своих средств и иметь возможность просмотра своих
          изменений на платформе, а вдобавок к нему — реферальную программу и
          бонусы за активность, для вовлечения игроков. Нельзя называть
          стандартные паттерны UX — гипотезой, разбрасываться терминами и
          создавать себе лишние проблемы
        </CaseParagraph>
        <CaseNoteParagraph>
          {`*Это сработало (а как иначе?), почти каждый второй игрок имеет 1-3 рефералов и все активно пользуются бонусной программой. В купе с SMM отделом, нам удается удерживать аудиторию, придумывая новые эвенты и бонусы за активность*`}
        </CaseNoteParagraph>

        <CaseFigure src="/cases/rocket-crash/profile.png" />
      </CaseSection>

      <CaseSection title="Пополнения и выводы">
        <CaseParagraph>
          В одном из кейсов которые я сделал, уже было описание хорошей механики
          работы этих разделов, исходя из успешного опыта мы решили ничего не
          менять, копировав френдли юзабилити на новоиспеченную платформу. Здесь
          я покажу банковский метод пополнения
        </CaseParagraph>
        <CaseNoteParagraph>
          {`*Валюта меняется в зависимости от региона. Если пользователь первый раз зашел на платформу в Чехии, то автоматически будет стоять крона, если с Германии — евро, и так далее. Тоже самое с языком. Валюту и язык всегда можно поменять в меню*`}
        </CaseNoteParagraph>

        <CaseFigure src="/cases/rocket-crash/deps.png" />
      </CaseSection>

      <CaseSection title="Итоги работы">
        <CaseParagraph>
          В результате проведения анализов, работы механик и юзабилити тестов —
          проект вышел в продакшн. Мы смогли корректно шаблонизировать как дизайн
          систему так и код, в результате чего выпускаются другие лэйблы на
          готовой базе, при минимальных системных изменениях
        </CaseParagraph>
      </CaseSection>
    </article>
  );
}

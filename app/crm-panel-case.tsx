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

export default function CrmPanelCase() {
  return (
    <article className="case-detail">
      <header className="case-detail__intro">
        <h1 className={`case-detail__title ${unbounded.className}`}>
          CRM Panel
        </h1>
        <p className="case-detail__intro-description">
          Internal CRM interface for monitoring users, managing data, reviewing
          activity, and supporting operator workflows.
        </p>
      </header>

      <CaseHeroCover src="/cases/crm-panel/cover.png" alt="CRM Panel" />

      <div className="case-detail__section">
        <div className="case-detail__body">
          <CaseParagraph>*предисловие*</CaseParagraph>
          <CaseParagraph>
            Изначально идея заключалась в создании простой игры с уникальным
            функционалом, которого не было в других играх подобного жанра. Сейчас
            игра уже больше года успешно работает в продакшене, ежедневно привлекая
            более 2000 активных игроков и свыше 15 000 зарегистрированных
            пользователей. В этом проекте хочу показать часть админ-панели этой
            игры
          </CaseParagraph>
        </div>
      </div>

      <CaseSection title="Основная задача проекта">
        <CaseParagraph>
          На заре предстоящего выхода на прод игры — нужно создать инструмент,
          позволяющий контролировать все действия внутри фрейма игры, к ним
          относится управление игроками, статистикой, балансами, транзакциями,
          рекламой и тд. И весь этот перечень нужно оформить так, чтобы персоналу
          было удобно пользоваться продуктом, чтобы все функции были под рукой
        </CaseParagraph>
      </CaseSection>

      <CaseSection title="Подход к задаче">
        <CaseParagraph>
          Админ панель подразумевает закрытую систему, потому возможность
          посмотреть конкурентов полностью исключается. Отталкивался от привычных
          паттернов UX дизайна
        </CaseParagraph>
      </CaseSection>

      <CaseSection title="Промежуточные результаты">
        <CaseParagraph>
          После многих этапов согласования, мы пришли к единому стилю. На основе
          него начал собирать UI Kit и продолжать проектировать, только уже
          основные разделы
        </CaseParagraph>

        <CaseFigure src="/cases/crm-panel/interm-results.png" />
      </CaseSection>

      <CaseSection title="Раздел управления пользователями">
        <CaseParagraph>
          В первую очередь я разместил таблицу с пользователями, показав основную
          информацию (необходимые параметры сортировки были в тех задании). Также
          экран управления аккаунтом юзера, в котором находится вся информация с
          первой минуты после авторизации
        </CaseParagraph>

        <CaseFigure src="/cases/crm-panel/management.png" />
      </CaseSection>

      <CaseSection title="История пополнений счета">
        <CaseParagraph>
          Не плодим компоненты! Из за гибкости таблицы, получилось адаптировать ее
          почти под весь информационный контент. В данном разделе можно увидеть
          ряд нужной для менеджера информации о депозите, также прикрутил
          фильтрацию для упрощения поиска
        </CaseParagraph>

        <CaseFigure src="/cases/crm-panel/history.png" />
      </CaseSection>

      <CaseSection title="Запросы на вывод">
        <CaseParagraph>
          Из за опасений обуза системы — все запросы на вывод не проходят
          автоматически, их нужно подтверждать вручную. Сначала администратор
          проверяет информацию о платеже, а после согласно инструкции решает,
          можно ли его подтверждать. Чтобы исключить миссклики на важном разделе,
          добавил модалку с подтверждением действия
        </CaseParagraph>

        <CaseFigure src="/cases/crm-panel/requiests.png" />
      </CaseSection>

      <CaseSection title="Проблема и решение">
        <CaseParagraph>
          Игра стрельнула, показала приличную конверсию и перспективы на создание
          подобного контента. Спустя пол года после запуска пришло несколько
          запросов на создание игр. Каждая из них подразумевает систему
          администрирования, и как быть? Рисовать новые?
        </CaseParagraph>
        <CaseParagraph>
          После изучения нового ТЗ для будущих игрушек я заметил, что информация
          во многом совпадает с данными, под которые уже создан дизайн. После
          обсуждения гипотезы с разработчиками я пришел к выводу разделить админку
          на рабочие области с ограниченным доступом, где данные каждой области
          будут изолированы. Такое “простое” решение позволило нам оптимизировать
          время разработки и ускорить создание нового инструмента
        </CaseParagraph>

        <CaseFigure src="/cases/crm-panel/troubles.png" />
      </CaseSection>

      <CaseSection title="Итог">
        <CaseParagraph>
          Задача выполнена, все разделы готовы. Есть перспектива развития, больше
          не нужно ломать голову над проектированием нового инструмента. Создан
          крепкий UI Kit, документация и я в роли дежурного дизайнера
        </CaseParagraph>
      </CaseSection>
    </article>
  );
}

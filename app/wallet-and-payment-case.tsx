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

export default function WalletAndPaymentCase() {
  return (
    <article className="case-detail">
      <header className="case-detail__intro">
        <h1 className={`case-detail__title ${unbounded.className}`}>
          Wallet and Payment
        </h1>
        <p className="case-detail__intro-description">
          Mobile payment experience with deposits, balances, transaction flows,
          and wallet interactions.
        </p>
      </header>

      <CaseHeroCover
        src="/cases/wallet-and-payment/cover.png"
        alt="Wallet and Payment"
      />

      <CaseSection title="Условия задачи">
        <CaseParagraph>
          Нужно отрисовать страницу Wallet, в которой будет вся информация о
          средствах со всеми вытекающими (история, фильтрация, отображение
          действующих балансов и тд)
        </CaseParagraph>
      </CaseSection>

      <CaseSection title="Что уже имеется?">
        <CaseParagraph>
          На данный момент продукт находится в стадии разработки, и все что мы
          имеем — это несколько готовых разделов и представление о навигации. Все
          перемещения по разделам осуществляются через таб бар, в него включены
          основные разделы
        </CaseParagraph>
        <ul className="case-detail__results-list">
          <li>
            Home page — основная страница, на которой расположено всего и по
            немного. Тут пользователь сможет познакомиться с платформой, увидеть
            эвенты, поиграть в игры, увидеть рекордные выигрыши платформы на
            ставке или спине (Spin - ставка, внутри игры)
          </li>
          <li>
            Casino — раздел содержит в себе все игры, которые имеются. Они
            разбиты по категориям для удобства
          </li>
          <li>
            Wallet — кошелек юзера. В нем все о имеющихся валютах, балансах,
            также функционал позволяет посмотреть историю транзакций как общую,
            так и внутри игры или ставки
          </li>
          <li>
            Sportsbook — раздел, на котором расположены спортивные эвенты,
            внутри которых юзер может сделать ставку на ту или иную команду.
            Имеется широкий спектр ставки для удобства. Можно поставить как одну
            ставку, так и несколько, так называемая “Combo bet”
          </li>
          <li>
            Menu — меню, в котором можно зайти в настройки приложения, увидеть
            личный кабинет, отправить реферальную ссылку, посмотреть бонусную
            программу, VIP программу, связаться с поддержкой, поменять язык и
            выйти из аккаунта.
          </li>
        </ul>

        <CaseFigure src="/cases/wallet-and-payment/wallet-overview.png" />
      </CaseSection>

      <CaseSection title="Раздел Wallet">
        <CaseParagraph>
          Была проблема с понятным размещением всех функций. После нескольких
          концептов я стал ясно видеть картину содержимого. Далее согласовал
          один из вариантов, проверив его на наличие ошибок или неудобных
          моментов — я приступил к отрисовке чистового макета.
        </CaseParagraph>
        <CaseParagraph>Содержимое раздела</CaseParagraph>
        <ul className="case-detail__results-list">
          <li>
            Балансы — одна из наших индивидуальных сторон среди конкурентов - это
            наличие нескольких балансов. Есть основной баланс, на который
            пользователь может закинуть средства, также можешь вывести. Путем
            свайпа карточки, пользователь может увидеть еще два баланса —
            бонусный и реферальный. Бонусный баланс не имеет функции пополнения и
            вывода, его получают только в случае успешного пополнения или
            применения промокода. Отличие реферального баланса от бонусного в
            том, что бонусный нельзя вывести, а реферальный можно скинуть на
            основной и после вывести. Средства на счет приходят в том случае,
            если приглашенный тобой игрок сделал свой первый депозит, после чего
            юзеру приходит процент от этого депозита. Количество рефералов
            неограниченно
          </li>
          <li>
            Список имеющихся валют  —  прямо под балансами расположены карточки, на
            которых отображается список имеющихся валют. Также рядом отображается
            онлайн курс в долларах. Валют может быть неограниченное количество
            (почти - не более 55ти, именно столько валют содержит продукт) Все
            эти карточки это часть основного счета. Все можно пополнить и вывести
          </li>
          <li>
            История операций — отображает всю историю транзакций с широкой
            возможность фильтрации
          </li>
        </ul>

        <CaseFigure src="/cases/wallet-and-payment/wallet-balances.png" />
      </CaseSection>

      <CaseSection title="Депозит">
        <CaseParagraph>
          После нажатия на кнопку депозита, открывается модалка с возможность
          смены депозита на вывод. С учетом моего опыта работы с балансами, я
          знаю что пользователи испытывали трудности в понимании, могли
          запутаться, так как не понимали, какую валюту они пополняют или
          выводят. Первым делом отобразил таб валюты, которую можно быстро
          поменять
        </CaseParagraph>
        <CaseParagraph>
          Также хочу заметить, что  по дефолту депозит через крипту не
          сопровождается никакими кнопками
        </CaseParagraph>
        <CaseParagraph>*Стандартный флоу у конкурентов:*</CaseParagraph>
        <CaseParagraph>
          *Юзер скопировал адрес —&gt; перешел в свой крипто кошелек —&gt; отправил
          сумму на указанный номер —&gt; success notification операции внутри
          кошелька*
        </CaseParagraph>
        <CaseParagraph>
          Анализ обращений в поддержку показал значительное количество вопросов,
          касающихся подтверждения успешного зачисления средств, что
          свидетельствует о необходимости улучшения коммуникации со стороны
          системы уведомлений. В результате личного исследования я выявил, что
          лучше сделать кнопку, которая будет служить успокоительным элементом
          для пользователя, фактически ее нахождение не имеет никакой функции,
          но юзер теперь спокоен, что закончил депозит и увидел подтверждение.
          Мгновенная обратная связь от системы не только снизила тревожность
          пользователей, но и способствовала значительному сокращению уровня
          обращений в поддержку, а конкретнее — на 10%
        </CaseParagraph>
        <CaseParagraph>*(фидбэк от продукт менеджера)*</CaseParagraph>

        <CaseFigure src="/cases/wallet-and-payment/deposit-flow.png" />
      </CaseSection>

      <CaseSection title="Вывод средств">
        <CaseParagraph>
          Финансовые вопросы часто вызывают у людей волнение, поэтому я
          предложил добавить в поле &apos;Wallet address&apos; функцию, которая
          проверяет введенный адрес кошелька на существование в режиме онлайн.
          Хотя возможности нашей системы ограничены, я реализовал проверку,
          насколько это возможно. Теперь при вводе адреса кошелька пользователь
          получает ответ от системы, существует ли указанный адрес, что помогает
          избежать ошибок или случайных опечаток
        </CaseParagraph>
        <CaseParagraph>
          *чтобы полностью исключить возможность ошибки, лучше подключить web3
          кошелек, с ним наша система хорошо дружит*
        </CaseParagraph>

        <CaseFigure src="/cases/wallet-and-payment/withdraw-flow.png" />
      </CaseSection>

      <CaseSection title="Wallet Connect">
        <CaseParagraph>
          Пользователь подключает свой WEB3 Wallet, после чего платформа
          автоматически авторизует его. Это позволяет выполнять все транзакции
          напрямую через кошелек, без необходимости заполнять формы, что
          минимизирует риск ошибок. Мы рекомендуем подключить кошелек сразу при
          регистрации — это упростит вход в систему, а также пополнение и вывод
          средств по привязанному адресу
        </CaseParagraph>

        <CaseFigure src="/cases/wallet-and-payment/wallet-connect.png" />
      </CaseSection>

      <CaseSection title="Итог">
        <CaseParagraph>
          В результате упорной работы, десятками часов проектирования и
          несколькими днями проверки гипотез — проект стоит на проде.
        </CaseParagraph>
        <CaseParagraph>
          Было получено более 5ти наград внутри нескольких Gambling -
          community, также презентация MVP-1 на показе новых WEB3 платформ в
          Дубай
        </CaseParagraph>
      </CaseSection>
    </article>
  );
}

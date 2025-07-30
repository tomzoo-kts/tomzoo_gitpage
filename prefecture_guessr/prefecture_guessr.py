import streamlit as st
import pandas as pd

# タイトル
st.title("City Guessr")

# データ読み込み
@st.cache_data
def load_data():
    df = pd.read_csv("city_list.csv", sep=",")
    df.columns = ["都道府県", "市区町村"]
    return df

df = load_data()

# セッション初期化
if "quiz" not in st.session_state:
    st.session_state.quiz = df.sample(1).iloc[0]
    st.session_state.show_answer = False

# 現在のクイズデータ
city = st.session_state.quiz["市区町村"]
true_pref = st.session_state.quiz["都道府県"]

# 横並びで市名と答えを表示（中間に余白列あり）
col1, col_space, col2 = st.columns([2, 1, 3])
col1.subheader(f"{city}")

# 答え表示部分：高さ固定のため透明テキストを使用
if st.session_state.show_answer:
    col2.markdown(f"<h3>正解：{true_pref}</h3>", unsafe_allow_html=True)
else:
    # 高さを維持するため、透明な文字でスペースを確保
    col2.markdown('<h3 style="color:rgba(0,0,0,0)">正解：ダミー</h3>', unsafe_allow_html=True)


with st.form(key="quiz_form", clear_on_submit=False):
    # ボタンの表示ラベルは状態に応じて変えるが、ボタンは1つに固定
    label = "次の問題へ" if st.session_state.show_answer else "答えを見る"
    submit = st.form_submit_button(label)

    if submit:
        if st.session_state.show_answer:
            # 次の問題へ
            st.session_state.quiz = df.sample(1).iloc[0]
            st.session_state.show_answer = False
        else:
            # 答えを見る
            st.session_state.show_answer = True
        st.rerun()

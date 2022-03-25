import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { ActivityIndicator, Alert, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import sanitizeHtml from 'sanitize-html';
import api from '../../services/api';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import Arrow from '../../assets/arrow.svg';

import {
  Container,
  Content,
  Title,
  Card,
  Picture,
  SubTitle,
  Description,
  ReadMore,
  SeeMore,
  Option,
  Expand,
  Order,
  Icon,
  List,
  ReadMoreView,
} from './styles';

const link = 'https://coursify.me/.';

export function Home() {
  const [type, setType] = useState<string>('');
  const [categs, setCategs] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  async function getList() {
    try {
      const responseCategories = await api.get('categories');

      setCategs(responseCategories.data);

      const responsePosts = await api.get('posts');

      if (responsePosts.data) {
        responsePosts.data.forEach(async r => {
          const { id, title, content, excerpt, featured_media, categories } = r;

          const responseMedia = await api.get(`media/${featured_media}`);

          const { source_url } = responseMedia.data;

          const cont = sanitizeHtml(content.rendered, {
            allowedTags: [],
          });

          const exce = sanitizeHtml(excerpt.rendered, {
            allowedTags: [],
          }).substring(0, 50);

          const newItem = {
            id,
            title: title.rendered,
            content: cont,
            excerpt: `${exce}...`,
            source: source_url,
            categories,
          };

          setPosts(state => [...state, newItem]);
        });

        setIsLoading(false);
      }
    } catch (error) {
      Alert.alert('Erro!', 'Houve um problema para carregar a lista');
    }
  }

  const handleCard = item => {
    navigation.navigate('InternArticle', { item });
  };

  useEffect(() => {
    if (categs.length === 0) {
      getList();
    }
  }, []);

  switch (type) {
    case 'A-Z':
      categs.sort((a, b) => a.name > b.name);

      break;

    case 'Z-A':
      categs.sort((a, b) => a.name < b.name);

      break;

    default:
  }

  return (
    <Container>
      <Header />

      <Expand>
        <Option>ORDERNAR POR:</Option>

        <Order>
          <Picker
            style={{
              width: 120,
              height: 46,
            }}
            mode="dropdown"
            selectedValue={type}
            onValueChange={itemType => setType(String(itemType))}
          >
            <Picker.Item label="A-Z" value="A-Z" />
            <Picker.Item label="Z-A" value="Z-A" />
          </Picker>
        </Order>
      </Expand>

      {isLoading ? (
        <ActivityIndicator size="large" color="0000ff" />
      ) : (
        categs.map(({ id, name }) => (
          <List key={id}>
            <Expand>
              <Title>{name}</Title>

              <SeeMore>
                <Option>VER MAIS</Option>

                <Icon>
                  <Arrow width={12} height={14} />
                </Icon>
              </SeeMore>
            </Expand>
            <FlatList
              data={posts}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <Content>
                  <Card onPress={() => handleCard(item)}>
                    <Picture source={{ uri: item.source }} />

                    <SubTitle>{item.title}</SubTitle>

                    <Description>{item.excerpt}</Description>

                    <ReadMoreView>
                      <ReadMore>Leia mais</ReadMore>
                    </ReadMoreView>
                  </Card>
                </Content>
              )}
              horizontal
            />
          </List>
        ))
      )}

      <Footer url={link} />
    </Container>
  );
}
